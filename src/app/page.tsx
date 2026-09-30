const version = process.env.NEXT_PUBLIC_APP_VERSION ?? "0.1.0";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-zinc-50 p-8 dark:bg-black">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">Git 연습 프로젝트</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Next.js + Git 브랜치 / 머지 / 배포 연습용
      </p>
      <span className="rounded-full bg-zinc-900 px-4 py-1 font-mono text-sm text-white dark:bg-zinc-100 dark:text-black">
        v{version}
      </span>
    </main>
  );
}
