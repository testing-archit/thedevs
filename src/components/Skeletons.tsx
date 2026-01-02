export function CompanyCardSkeleton() {
    return (
        <div className="glass-card rounded-2xl p-8 animate-pulse">
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/5" />
                <div className="flex-1">
                    <div className="h-6 bg-white/5 rounded w-32 mb-2" />
                    <div className="h-4 bg-white/5 rounded w-24" />
                </div>
            </div>
            <div className="space-y-2 mb-6">
                <div className="h-4 bg-white/5 rounded w-full" />
                <div className="h-4 bg-white/5 rounded w-3/4" />
            </div>
        </div>
    );
}

export function ProblemRowSkeleton() {
    return (
        <tr className="animate-pulse">
            <td className="px-8 py-5">
                <div className="w-6 h-6 rounded-full bg-white/5" />
            </td>
            <td className="px-8 py-5">
                <div className="h-5 bg-white/5 rounded w-48" />
            </td>
            <td className="px-8 py-5">
                <div className="h-6 bg-white/5 rounded-full w-16" />
            </td>
            <td className="px-8 py-5">
                <div className="h-4 bg-white/5 rounded w-24" />
            </td>
            <td className="px-8 py-5">
                <div className="h-4 bg-white/5 rounded w-20" />
            </td>
            <td className="px-8 py-5 text-right">
                <div className="w-10 h-10 rounded-full bg-white/5 ml-auto" />
            </td>
        </tr>
    );
}

export function TopicCardSkeleton() {
    return (
        <div className="glass-card rounded-2xl p-6 animate-pulse">
            <div className="w-12 h-12 rounded-xl bg-white/5 mb-4" />
            <div className="h-6 bg-white/5 rounded w-32 mb-2" />
            <div className="h-4 bg-white/5 rounded w-full mb-1" />
            <div className="h-4 bg-white/5 rounded w-2/3 mb-4" />
            <div className="h-4 bg-white/5 rounded w-24" />
        </div>
    );
}
