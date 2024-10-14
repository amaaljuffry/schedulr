import { 
  ClipboardCheck,
  Zap, ShieldCheck, ThumbsUp
  } from "lucide-react";

const features = [
  {
    name: "Sign up for free",
    description:
      "Experience effortless scheduling. Sign up for free today and see how easy it is to manage your meetings with Schedulr.",
    icon: ClipboardCheck,
  },
  {
    name: "Blazing fast",
    description:
      "Our platform is designed for speed. Schedule and manage your meetings with lightning-fast performance, saving you valuable time.",
    icon: Zap,
  },
  {
    name: "Super secure",
    description:
      "Security is our top priority. With Nylas integration, your data is protected by top-tier security measures, ensuring your meetings are not just fast but safe as well.",
    icon: ShieldCheck,
  },
  {
    name: "Easy to use",
    description:
      "Simplicity is key. Our intuitive interface makes scheduling meetings a breeze, so you can focus on what matters most..",
    icon: ThumbsUp,
  },
];

export function Features() {
  return (
    <div className="py-24 ">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Schedule faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Schedule meetings in minutes
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          With Schedulr you can schedule meetings in minutes. We make it easy
          for you to schedule meetings in minutes. The meetings are very fast
          and easy to schedule.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
