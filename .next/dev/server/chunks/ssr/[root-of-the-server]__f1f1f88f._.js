module.exports = [
"[project]/Desktop/devs-online/src/db/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "companies",
    ()=>companies,
    "companiesRelations",
    ()=>companiesRelations,
    "difficultyEnum",
    ()=>difficultyEnum,
    "problems",
    ()=>problems,
    "problemsRelations",
    ()=>problemsRelations,
    "sessions",
    ()=>sessions,
    "sessionsRelations",
    ()=>sessionsRelations,
    "submissionStatusEnum",
    ()=>submissionStatusEnum,
    "submissions",
    ()=>submissions,
    "submissionsRelations",
    ()=>submissionsRelations,
    "subscriptionEnum",
    ()=>subscriptionEnum,
    "topics",
    ()=>topics,
    "topicsRelations",
    ()=>topicsRelations,
    "userRoleEnum",
    ()=>userRoleEnum,
    "users",
    ()=>users,
    "usersRelations",
    ()=>usersRelations
]);
// Database Schema - Drizzle ORM
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/integer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/pg-core/columns/enum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/relations.js [app-rsc] (ecmascript)");
;
;
const userRoleEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgEnum"])('user_role', [
    'student',
    'admin'
]);
const subscriptionEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgEnum"])('subscription_status', [
    'free',
    'pro',
    'expired'
]);
const difficultyEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgEnum"])('difficulty', [
    'easy',
    'medium',
    'hard'
]);
const submissionStatusEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgEnum"])('submission_status', [
    'pending',
    'accepted',
    'wrong_answer',
    'time_limit',
    'runtime_error'
]);
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('users', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('id').defaultRandom().primaryKey(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('email', {
        length: 255
    }).notNull().unique(),
    passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('password_hash', {
        length: 255
    }).notNull(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('name', {
        length: 100
    }).notNull(),
    // Student profile fields
    course: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('course', {
        length: 50
    }),
    specialization: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('specialization', {
        length: 100
    }),
    yearOfStudy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('year_of_study'),
    role: userRoleEnum('role').default('student').notNull(),
    subscription: subscriptionEnum('subscription').default('free').notNull(),
    subscriptionEndsAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('subscription_ends_at'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const companies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('companies', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('id').defaultRandom().primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('name', {
        length: 100
    }).notNull().unique(),
    slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('slug', {
        length: 100
    }).notNull().unique(),
    logoUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('logo_url', {
        length: 500
    }),
    industry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('industry', {
        length: 100
    }),
    visitedYear: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('visited_year'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
});
const topics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('topics', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('id').defaultRandom().primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('name', {
        length: 100
    }).notNull().unique(),
    slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('slug', {
        length: 100
    }).notNull().unique(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('description')
});
const problems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('problems', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('id').defaultRandom().primaryKey(),
    companyId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('company_id').references(()=>companies.id).notNull(),
    topicId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('topic_id').references(()=>topics.id),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('title', {
        length: 255
    }).notNull(),
    slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('slug', {
        length: 255
    }).notNull().unique(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('description').notNull(),
    difficulty: difficultyEnum('difficulty').default('medium').notNull(),
    year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('year'),
    isPremium: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])('is_premium').default(false).notNull(),
    starterCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonb"])('starter_code').$type(),
    testCases: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonb"])('test_cases').$type(),
    constraints: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('constraints'),
    hints: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('hints'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const submissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('submissions', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('id').defaultRandom().primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('user_id').references(()=>users.id).notNull(),
    problemId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('problem_id').references(()=>problems.id).notNull(),
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('code').notNull(),
    language: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('language', {
        length: 20
    }).notNull(),
    status: submissionStatusEnum('status').default('pending').notNull(),
    runtimeMs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('runtime_ms'),
    memoryKb: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('memory_kb'),
    testCasesPassed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('test_cases_passed').default(0),
    totalTestCases: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('total_test_cases').default(0),
    errorMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('error_message'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
});
const sessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('sessions', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('id').defaultRandom().primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('user_id').references(()=>users.id).notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('token', {
        length: 255
    }).notNull().unique(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('expires_at').notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
});
const usersRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(users, ({ many })=>({
        submissions: many(submissions),
        sessions: many(sessions)
    }));
const companiesRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(companies, ({ many })=>({
        problems: many(problems)
    }));
const topicsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(topics, ({ many })=>({
        problems: many(problems)
    }));
const problemsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(problems, ({ one, many })=>({
        company: one(companies, {
            fields: [
                problems.companyId
            ],
            references: [
                companies.id
            ]
        }),
        topic: one(topics, {
            fields: [
                problems.topicId
            ],
            references: [
                topics.id
            ]
        }),
        submissions: many(submissions)
    }));
const submissionsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(submissions, ({ one })=>({
        user: one(users, {
            fields: [
                submissions.userId
            ],
            references: [
                users.id
            ]
        }),
        problem: one(problems, {
            fields: [
                submissions.problemId
            ],
            references: [
                problems.id
            ]
        })
    }));
const sessionsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(sessions, ({ one })=>({
        user: one(users, {
            fields: [
                sessions.userId
            ],
            references: [
                users.id
            ]
        })
    }));
}),
"[project]/Desktop/devs-online/src/db/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/@neondatabase/serverless/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/neon-http/driver.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/src/db/schema.ts [app-rsc] (ecmascript)");
;
;
;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is not set');
}
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neon"])(connectionString);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["drizzle"])(client, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Desktop/devs-online/src/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00000c760f172927aef7d4162011d66c84a6103456":"logout","60779f2d7ed3973000caa7d3858a4b8a7c26171de5":"login","609bb56a9c70461415856a924bcb7edce7f58dc22a":"signup"},"",""] */ __turbopack_context__.s([
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "signup",
    ()=>signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/devs-online/src/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        return {
            error: 'Please fill in all fields'
        };
    }
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].query.users.findFirst({
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email, email)
        });
        if (!user) {
            return {
                error: 'Invalid credentials'
            };
        }
        const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.passwordHash);
        if (!isValid) {
            return {
                error: 'Invalid credentials'
            };
        }
        await createSession(user.id);
    } catch (error) {
        console.error('Login error:', error);
        return {
            error: 'Something went wrong. Please try again.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
async function signup(prevState, formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const course = formData.get('course');
    const specialization = formData.get('specialization');
    const yearOfStudy = parseInt(formData.get('yearOfStudy'));
    const confirmPassword = formData.get('confirmPassword');
    if (!name || !email || !password || !course || !specialization || !yearOfStudy) {
        return {
            error: 'Please fill in all fields'
        };
    }
    if (password !== confirmPassword) {
        return {
            error: 'Passwords do not match'
        };
    }
    try {
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].query.users.findFirst({
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email, email)
        });
        if (existingUser) {
            return {
                error: 'User with this email already exists'
            };
        }
        const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        const [newUser] = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).values({
            email,
            passwordHash,
            name,
            course,
            specialization,
            yearOfStudy,
            role: 'student',
            subscription: 'free'
        }).returning();
        await createSession(newUser.id);
    } catch (error) {
        console.error('Signup error:', error);
        return {
            error: 'Something went wrong. Please try again.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
async function logout() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('session_token')?.value;
    if (token) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessions"].token, token));
        cookieStore.delete('session_token');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function createSession(userId) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(64).toString('hex');
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessions"]).values({
        userId,
        token,
        expiresAt
    });
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set('session_token', token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: 'lax',
        expires: expiresAt
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    signup,
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "60779f2d7ed3973000caa7d3858a4b8a7c26171de5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signup, "609bb56a9c70461415856a924bcb7edce7f58dc22a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00000c760f172927aef7d4162011d66c84a6103456", null);
}),
"[project]/Desktop/devs-online/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/devs-online/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/src/actions/auth.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Desktop/devs-online/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/devs-online/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60779f2d7ed3973000caa7d3858a4b8a7c26171de5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/devs-online/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/devs-online/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2d$online$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs-online/src/actions/auth.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f1f1f88f._.js.map