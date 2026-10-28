import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronDown,
  Files,
  FolderOpen,
  Layers3,
  MessageCircleMore,
  MessagesSquare,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { ArrowBtn, OutlineBtn } from "../_components/ui/Button";
import { ComparisonShowcase } from "../_components/ui/ComparisonShowcase";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";

const description =
  "Move your school, bootcamp, or learning community from scattered chats and files into one structured Zedu workspace.";

export const metadata: Metadata = {
  title: "Migrate to Zedu",
  description,
  keywords: [
    "migrate to Zedu",
    "WhatsApp alternative for schools",
    "Telegram alternative for bootcamps",
    "Google Classroom alternative",
    "education communication platform",
    "cohort communication platform",
    "learning community workspace",
    "school communication software",
  ],
  applicationName: "Zedu",
  category: "Education",
  creator: "Zedu",
  publisher: "Zedu",
  alternates: {
    canonical: siteUrl("/migrate"),
  },
  openGraph: {
    title: "Move from scattered chats to one learning workspace",
    description,
    url: siteUrl("/migrate"),
    siteName: "Zedu",
    type: "website",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Migrate learning communication into a structured Zedu workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move from scattered chats to one learning workspace",
    description,
    images: [ogImageUrl("og-image-5.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const benefits: Benefit[] = [
  {
    title: "Clear communication",
    description:
      "Give announcements, discussions, and questions a named place instead of another busy group chat.",
    icon: MessagesSquare,
  },
  {
    title: "Simpler onboarding",
    description:
      "Welcome each learner into an understandable cohort structure with the right people and resources.",
    icon: UsersRound,
  },
  {
    title: "Context that lasts",
    description:
      "Keep files and conversations together so useful answers remain searchable after the moment passes.",
    icon: Search,
  },
  {
    title: "Room to scale",
    description:
      "Add programs, cohorts, and roles without rebuilding your communication process around more apps.",
    icon: Layers3,
  },
];

const steps = [
  {
    title: "Map what you use today",
    description:
      "List the chats, classrooms, folders, and announcement channels your team depends on. Decide what should move, what can be archived, and who needs access.",
  },
  {
    title: "Set up a clear Zedu structure",
    description:
      "Create the organization, cohorts, channels, roles, and resource spaces that match how your learning program actually runs.",
  },
  {
    title: "Launch one cohort at a time",
    description:
      "Invite the right people, share a simple starting guide, and bring active communication into Zedu in manageable stages.",
  },
];

const faqs = [
  {
    question:
      "Can Zedu automatically import everything from our current tools?",
    answer:
      "Zedu does not promise a one-click import from every platform. Our team can help you plan what should move, organize the destination workspace, and choose a practical rollout for your current content and communities.",
  },
  {
    question: "Can we keep using our current tools while we move?",
    answer:
      "Yes. Many teams start with one active cohort or communication workflow, learn what works, and then move the next group. A staged launch reduces disruption and gives everyone time to build new habits.",
  },
  {
    question: "How much setup does a migration take?",
    answer:
      "It depends on the number of cohorts, spaces, people, and resources you want to organize. Start with a simple map of your current setup; Zedu's structure can then mirror the parts that matter without recreating every old chat.",
  },
  {
    question: "Is Zedu only for large schools?",
    answer:
      "No. Zedu is designed for schools, bootcamps, training programs, and learning communities. You can begin with a focused cohort and add more programs, members, and roles as your organization grows.",
  },
  {
    question: "Can someone help us plan the move?",
    answer:
      "Yes. Book a demo to discuss your current tools, learning structure, and rollout goals with the Zedu team. We will help you identify a sensible starting point.",
  },
];

const sources = [
  { name: "WhatsApp", use: "Group updates", icon: MessageCircleMore },
  { name: "Telegram", use: "Community chat", icon: MessagesSquare },
  { name: "Google Classroom", use: "Class activity", icon: BookOpenCheck },
  { name: "Email + drives", use: "Announcements and files", icon: Files },
];

const workspaceRows = [
  { label: "# cohort-announcements", icon: MessageCircleMore },
  { label: "# frontend-class", icon: BookOpenCheck },
  { label: "Learning resources", icon: FolderOpen },
];

export default function MigratePage() {
  return (
    <main className="overflow-hidden bg-white text-blue-100">
      <section className="relative px-4 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-8 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-blue-100 sm:text-5xl lg:text-[4rem]">
              Move your learning community out of scattered chats
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl">
              Bring every cohort, update, file, and conversation into one
              structured Zedu workspace—without forcing your whole community to
              change overnight.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ArrowBtn text="Book a Demo" href="/contact-sales" />
              <OutlineBtn text="Start for Free" href="/auth/sign-up" />
            </div>
            <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-neutral-600">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-primary-500"
                aria-hidden="true"
              />
              <p>
                Start with one cohort, keep current tools running, and move at a
                pace your team can support.
              </p>
            </div>
          </div>

          <MigrationMap />
        </div>
      </section>

      <section
        aria-labelledby="before-after-heading"
        className="bg-neutral-50 px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <h2
              id="before-after-heading"
              className="text-3xl font-semibold tracking-[-0.025em] text-blue-100 sm:text-4xl lg:text-5xl"
            >
              Make the important things easier to find
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Migration is not just moving messages. It is giving your learning
              community a structure people can understand and return to.
            </p>
          </div>
          <ComparisonShowcase
            withoutTitle="Before Zedu"
            withoutItems={[
              "Updates disappear inside fast-moving group chats",
              "The same announcement is repeated across several apps",
              "Files are separated from the conversation that explains them",
              "New learners do not know where to look first",
            ]}
            withTitle="With Zedu"
            withItems={[
              "Channels give every cohort and topic a clear home",
              "Announcements reach the right learning space",
              "Files and discussions stay connected and searchable",
              "New members enter a workspace built for how the program runs",
            ]}
            ctaText="Plan your move"
            ctaHref="/contact-sales"
            withPanelClassName="bg-primary-50"
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-blue-100 sm:text-4xl">
                Less tool management. More learning context.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Replace an improvised stack with communication that remains
                useful as your programs and communities grow.
              </p>
            </div>
            <div className="grid border-y border-neutral-200 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.title}
                    className={`py-7 sm:p-8 ${
                      index < 2 ? "border-b border-neutral-200" : ""
                    } ${index % 2 === 0 ? "sm:border-r" : ""}`}
                  >
                    <Icon
                      className="h-7 w-7 text-primary-500"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-xl font-semibold text-blue-100">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-500 px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Move with a plan your community can follow
            </h2>
            <p className="mt-5 text-lg leading-8 text-primary-100">
              Keep the first move focused. Build confidence in one part of the
              program, then carry that structure into the next.
            </p>
          </div>

          <ol
            aria-label="Migration steps"
            className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 lg:grid-cols-3"
          >
            {steps.map((step, index) => (
              <li key={step.title} className="bg-blue-500 p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold tracking-[-0.05em] text-primary-300">
                    0{index + 1}
                  </span>
                  {index < steps.length - 1 ? (
                    <ArrowRight
                      className="hidden h-5 w-5 text-primary-300 lg:block"
                      aria-hidden="true"
                    />
                  ) : (
                    <Check
                      className="hidden h-5 w-5 text-primary-300 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-primary-100">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="migration-faq-heading"
        className="px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <h2
              id="migration-faq-heading"
              className="text-3xl font-semibold tracking-[-0.025em] text-blue-100 sm:text-4xl"
            >
              What to know before you move
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              A clear migration starts with honest expectations and a sensible
              first step.
            </p>
          </div>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-lg font-semibold text-blue-100 marker:content-none">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-2xl pr-10 pt-4 leading-7 text-neutral-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary-500 px-6 py-14 text-center text-white sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-28 h-64 w-64 rounded-full border-[40px] border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full border-[48px] border-white/10"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Give your learning community one clear place to move forward
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-primary-50">
              Talk through your current setup with Zedu, or start a workspace
              and build your first cohort structure today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ArrowBtn text="Book a Demo" href="/contact-sales" inverted />
              <OutlineBtn
                text="Start for Free"
                href="/auth/sign-up"
                className="border-white text-white hover:bg-white hover:text-primary-500"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MigrationMap() {
  return (
    <div
      className="relative rounded-[2rem] border border-primary-100 bg-primary-50/70 p-4 shadow-[0_24px_80px_rgba(100,76,170,0.13)] sm:p-6"
      aria-label="Scattered tools becoming one organized Zedu workspace"
    >
      <div className="mb-4 flex items-center justify-between px-1 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
        <span>Scattered today</span>
        <span className="hidden sm:block">Structured in Zedu</span>
      </div>
      <div className="grid items-center gap-4 sm:grid-cols-[0.82fr_auto_1.18fr]">
        <div className="grid gap-2.5">
          {sources.map((source) => {
            const Icon = source.icon;
            return (
              <div
                key={source.name}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-neutral-100 text-neutral-600">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-blue-100">
                    {source.name}
                  </span>
                  <span className="block truncate text-xs text-neutral-500">
                    {source.use}
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="flex items-center justify-center text-primary-500"
        >
          <ArrowRight className="hidden h-7 w-7 sm:block" />
          <ArrowDown className="h-7 w-7 sm:hidden" />
        </div>

        <div className="overflow-hidden rounded-3xl border border-primary-200 bg-white shadow-[0_18px_45px_rgba(73,50,140,0.14)]">
          <div className="flex items-center justify-between bg-primary-500 px-4 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-sm font-bold">
                Z
              </span>
              <span>
                <span className="block text-sm font-semibold">
                  Aurora Learning
                </span>
                <span className="block text-[11px] text-primary-100">
                  Zedu workspace
                </span>
              </span>
            </div>
            <div className="flex -space-x-2" aria-label="Workspace members">
              {["AD", "MK", "JO"].map((initials) => (
                <span
                  key={initials}
                  className="grid h-7 w-7 place-items-center rounded-full border-2 border-primary-500 bg-primary-100 text-[9px] font-bold text-blue-100"
                >
                  {initials}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-neutral-400">
              Cohort spaces
            </p>
            <div className="mt-3 grid gap-2">
              {workspaceRows.map((row, index) => {
                const Icon = row.icon;
                return (
                  <div
                    key={row.label}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
                      index === 0
                        ? "bg-primary-50 text-blue-100"
                        : "text-neutral-600"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{row.label}</span>
                    {index === 0 && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-primary-500" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 rounded-2xl bg-neutral-50 p-3.5">
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-100 text-[10px] font-bold text-blue-100">
                  AD
                </span>
                <div>
                  <p className="text-xs font-semibold text-blue-100">
                    Ada · Program lead
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Welcome resources and this week's schedule are now in the
                    cohort channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
