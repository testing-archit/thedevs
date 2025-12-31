// Database Schema - Drizzle ORM
import { pgTable, uuid, varchar, text, timestamp, boolean, integer, jsonb, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const userRoleEnum = pgEnum('user_role', ['student', 'admin']);
export const subscriptionEnum = pgEnum('subscription_status', ['free', 'pro', 'expired']);
export const difficultyEnum = pgEnum('difficulty', ['easy', 'medium', 'hard']);
export const submissionStatusEnum = pgEnum('submission_status', ['pending', 'accepted', 'wrong_answer', 'time_limit', 'runtime_error']);

// ============ USERS ============
export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull(),
    name: varchar('name', { length: 100 }).notNull(),
    // Student profile fields
    course: varchar('course', { length: 50 }),           // B.Tech, BCA, MCA, etc.
    specialization: varchar('specialization', { length: 100 }), // CSE, AI/ML, Data Science, etc.
    yearOfStudy: integer('year_of_study'),               // 1, 2, 3, 4
    role: userRoleEnum('role').default('student').notNull(),
    subscription: subscriptionEnum('subscription').default('free').notNull(),
    subscriptionEndsAt: timestamp('subscription_ends_at'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// ============ COMPANIES ============
export const companies = pgTable('companies', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 100 }).notNull().unique(),
    slug: varchar('slug', { length: 100 }).notNull().unique(),
    logoUrl: varchar('logo_url', { length: 500 }),
    description: text('description'),
    industry: varchar('industry', { length: 100 }),
    visitedYear: integer('visited_year'),
    createdAt: timestamp('created_at').defaultNow().notNull()
});

// ============ TOPICS ============
export const topics = pgTable('topics', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 100 }).notNull().unique(),
    slug: varchar('slug', { length: 100 }).notNull().unique(),
    description: text('description')
});

// ============ PROBLEMS (PYQs) ============
export const problems = pgTable('problems', {
    id: uuid('id').defaultRandom().primaryKey(),
    companyId: uuid('company_id').references(() => companies.id).notNull(),
    topicId: uuid('topic_id').references(() => topics.id),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    description: text('description').notNull(),
    difficulty: difficultyEnum('difficulty').default('medium').notNull(),
    year: integer('year'),
    isPremium: boolean('is_premium').default(false).notNull(),
    starterCode: jsonb('starter_code').$type<Record<string, string>>(), // { cpp: "...", python: "..." }
    testCases: jsonb('test_cases').$type<{ input: string; expected: string; isHidden: boolean }[]>(),
    constraints: text('constraints'),
    hints: text('hints'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// ============ SUBMISSIONS ============
export const submissions = pgTable('submissions', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    problemId: uuid('problem_id').references(() => problems.id).notNull(),
    code: text('code').notNull(),
    language: varchar('language', { length: 20 }).notNull(), // cpp, python, java, javascript
    status: submissionStatusEnum('status').default('pending').notNull(),
    runtimeMs: integer('runtime_ms'),
    memoryKb: integer('memory_kb'),
    testCasesPassed: integer('test_cases_passed').default(0),
    totalTestCases: integer('total_test_cases').default(0),
    errorMessage: text('error_message'),
    createdAt: timestamp('created_at').defaultNow().notNull()
});

// ============ SESSIONS ============
export const sessions = pgTable('sessions', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    token: varchar('token', { length: 255 }).notNull().unique(),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull()
});

// ============ RELATIONS ============
export const usersRelations = relations(users, ({ many }) => ({
    submissions: many(submissions),
    sessions: many(sessions)
}));

export const companiesRelations = relations(companies, ({ many }) => ({
    problems: many(problems)
}));

export const topicsRelations = relations(topics, ({ many }) => ({
    problems: many(problems)
}));

export const problemsRelations = relations(problems, ({ one, many }) => ({
    company: one(companies, { fields: [problems.companyId], references: [companies.id] }),
    topic: one(topics, { fields: [problems.topicId], references: [topics.id] }),
    submissions: many(submissions)
}));

export const submissionsRelations = relations(submissions, ({ one }) => ({
    user: one(users, { fields: [submissions.userId], references: [users.id] }),
    problem: one(problems, { fields: [submissions.problemId], references: [problems.id] })
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
    user: one(users, { fields: [sessions.userId], references: [users.id] })
}));
