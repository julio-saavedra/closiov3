import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

type Phase = "typing" | "posting" | "routing" | "done";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function Field({
  label,
  value,
  placeholder,
  typed,
  isWide = true,
}: {
  label: string;
  value: string;
  placeholder: string;
  typed: boolean;
  isWide?: boolean;
}) {
  return (
    <div className={isWide ? "col-span-12" : "col-span-6"}>
      <div className="mb-2 text-[12px] text-white/75 font-medium">
        {label} <span className="text-white/35">*</span>
      </div>
      <div className="h-11 rounded-xl border border-white/[0.04] bg-black px-4 flex items-center">
        <div className="text-[13px] text-white/85">
          {value ? (
            <>
              {value}
              {typed ? <span className="ml-1 text-[#7dd3fc] animate-pulse">▍</span> : null}
            </>
          ) : (
            <span className="text-white/40">{placeholder}</span>
          )}
        </div>
        <div className="ml-auto text-white/30">▾</div>
      </div>
    </div>
  );
}

export default function DealBotAutomation() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(wrapRef, { once: true, margin: "-100px" });

  const formCardRef = useRef<HTMLDivElement | null>(null);
  const postBtnRef = useRef<HTMLButtonElement | null>(null);
  const botCardRef = useRef<HTMLDivElement | null>(null);
  const slackCardRef = useRef<HTMLDivElement | null>(null);
  const discordCardRef = useRef<HTMLDivElement | null>(null);

  const [phase, setPhase] = useState<Phase>("typing");

  const [carrier, setCarrier] = useState("");
  const [product, setProduct] = useState("");
  const [draftDate, setDraftDate] = useState("");
  const [state, setState] = useState("");
  const [monthly, setMonthly] = useState("");
  const [annual, setAnnual] = useState("");
  const [policy, setPolicy] = useState("");

  const fake = useMemo(
    () => ({
      carrier: "Mutual of Omaha",
      product: "Mortgage Protection",
      draftDate: "02-14-2026",
      state: "Florida",
      monthly: "$122.00",
      annual: "$1,464.00",
      policy: "MO-48291037",
    }),
    []
  );

  async function typeInto(setter: (v: string) => void, full: string, speed = 25) {
    for (let i = 0; i <= full.length; i++) {
      setter(full.slice(0, i));
      await sleep(speed + (i % 4 === 0 ? 20 : 0));
    }
  }

  useEffect(() => {
    if (!wrapRef.current || !isInView) return;

    const ctx = gsap.context(() => {
      gsap.set([slackCardRef.current, discordCardRef.current], { opacity: 0, y: 12, scale: 0.97 });
      gsap.set(botCardRef.current, { scale: 1, opacity: 1 });
      gsap.set(postBtnRef.current, { scale: 1 });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.0 });

      tl.add(async () => {
        setPhase("typing");
        setCarrier("");
        setProduct("");
        setDraftDate("");
        setState("");
        setMonthly("");
        setAnnual("");
        setPolicy("");

        gsap.set([slackCardRef.current, discordCardRef.current], { opacity: 0, y: 12, scale: 0.97 });

        await sleep(300);
        await typeInto(setCarrier, fake.carrier);
        await sleep(200);
        await typeInto(setProduct, fake.product);
        await sleep(200);
        await typeInto(setDraftDate, fake.draftDate, 20);
        await sleep(200);
        await typeInto(setState, fake.state);
        await sleep(200);
        await typeInto(setMonthly, fake.monthly, 20);
        await sleep(150);
        await typeInto(setAnnual, fake.annual, 20);
        await sleep(200);
        await typeInto(setPolicy, fake.policy, 20);
      });

      tl.add(() => setPhase("posting"), "+=0");
      tl.to(postBtnRef.current, { scale: 0.97, duration: 0.15, ease: "power2.inOut" }, "<");
      tl.to(postBtnRef.current, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" }, ">");

      tl.add(() => setPhase("routing"), "+=0.2");

      tl.to(botCardRef.current, { scale: 1.03, duration: 0.25, ease: "power2.out" }, "+=0.5");
      tl.to(botCardRef.current, { scale: 1, duration: 0.35, ease: "elastic.out(1, 0.6)" }, ">");

      tl.to(slackCardRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "+=3.5");
      tl.to(discordCardRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.4");

      tl.add(() => setPhase("done"), "+=1.5");
      tl.to({}, { duration: 2.0 });
    }, wrapRef);

    return () => ctx.revert();
  }, [fake, isInView]);

  return (
    <section ref={wrapRef} className="relative w-full py-32 sm:py-40 bg-black overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 65%, black 25%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 65%, black 25%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <div className="text-xs tracking-[0.28em] text-white/45 uppercase">Closio Automations</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-gray-400">/ Closio Deal Bot</h2>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-white/60">
            Post a deal in Closio — it instantly routes to Closio Deal Bot and announces the win in Slack or Discord.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div
              ref={formCardRef}
              className="relative rounded-3xl border border-white/[0.04] overflow-hidden"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%, #000000 100%)'
              }}
            >
              <div className="px-6 py-5 border-b border-white/[0.04]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-white font-semibold text-lg">Post A Deal</div>
                    <div className="text-white/55 text-sm">Create and log a new policy or client deal</div>
                  </div>
                  <div className="text-white/45 text-xl leading-none">×</div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-white/85 font-semibold text-sm mb-3">Insurance Details</div>

                <div className="grid grid-cols-12 gap-4">
                  <Field label="Insurance Carrier" placeholder="Select Insurance Carrier" value={carrier} typed={phase === "typing"} />
                  <Field label="Product" placeholder="Select Product" value={product} typed={phase === "typing"} />
                  <Field label="Draft Date" placeholder="MM-DD-YYYY" value={draftDate} typed={phase === "typing"} />
                  <Field label="Select State" placeholder="Select State" value={state} typed={phase === "typing"} />

                  <div className="col-span-6 flex flex-col justify-end">
                    <div className="mb-2 text-[12px] text-white/75 font-medium">
                      Monthly Premium <span className="text-white/35">*</span>
                    </div>
                    <div className="h-11 rounded-xl border border-white/[0.04] bg-black px-4 flex items-center">
                      <div className="text-[13px] text-white/85">
                        {monthly ? (
                          <>
                            {monthly}
                            {phase === "typing" ? <span className="ml-1 text-[#7dd3fc] animate-pulse">▍</span> : null}
                          </>
                        ) : (
                          <span className="text-white/40">$ 00.00</span>
                        )}
                      </div>
                      <div className="ml-auto text-white/30">▾</div>
                    </div>
                  </div>
                  <div className="col-span-6 flex flex-col justify-end">
                    <div className="mb-2 text-[12px] text-white/75 font-medium">
                      Annual Premium <span className="text-white/35">(Auto Calculate)</span>
                    </div>
                    <div className="h-11 rounded-xl border border-white/[0.04] bg-black px-4 flex items-center">
                      <div className="text-[13px] text-white/85">
                        {annual ? (
                          <>
                            {annual}
                            {phase === "typing" ? <span className="ml-1 text-[#7dd3fc] animate-pulse">▍</span> : null}
                          </>
                        ) : (
                          <span className="text-white/40">$ 0</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <Field label="Policy Number" placeholder="Enter Policy Number" value={policy} typed={phase === "typing"} />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button className="text-white/75 text-sm underline underline-offset-4 hover:text-white transition">
                    Clear Form
                  </button>
                  <div className="flex gap-3">
                    <button className="rounded-xl border border-white/[0.04] bg-black px-5 py-3 text-sm text-white/85 hover:bg-[#0A0A0A] transition">
                      Cancel
                    </button>
                    <button
                      ref={postBtnRef}
                      className="rounded-xl px-5 py-3 text-sm font-semibold text-black bg-white hover:opacity-95 transition"
                    >
                      {phase === "posting" ? "Posting…" : "Post Deal"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full space-y-7">
              <div
                ref={botCardRef}
                className="rounded-3xl border border-white/[0.04] p-6"
                style={{
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%, #000000 100%)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-11 rounded-2xl border border-white/[0.04] bg-black flex items-center justify-center overflow-hidden"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(255,255,255,0.05), 0 0 26px rgba(125,211,252,0.16)",
                    }}
                  >
                    <img src="/favicon_and_logo_for_closio.png" alt="Closio Logo" className="h-7 w-7 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/90 font-semibold">Closio Deal Bot</div>
                    <div className="text-white/55 text-sm">Connected • Listening • Posting</div>
                  </div>
                  <span className="text-[11px] text-white/65 rounded-full border border-white/[0.04] bg-black px-3 py-1">
                    Live
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-white/[0.04] bg-black p-4 text-xs text-white/70 font-mono whitespace-pre-wrap">
                  {phase === "typing" && "Waiting for new deal…"}
                  {phase === "posting" && "Deal received ✅\nFormatting message…"}
                  {phase === "routing" && "Routing to channels…"}
                  {phase === "done" && "Posted to Slack + Discord 🎉"}
                </div>
              </div>

              <div
                ref={slackCardRef}
                className="rounded-3xl border border-white/[0.04] p-5"
                style={{
                  willChange: 'transform, opacity, scale',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%, #000000 100%)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img src="/new_slack_icon.png" alt="Slack" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/90 font-semibold">#deals</div>
                    <div className="text-white/55 text-sm">Slack</div>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-white/[0.04] bg-black p-4 text-xs text-white/75 font-mono whitespace-pre-wrap">
                  🏆 NEW DEAL CLOSED
                  {"\n"}Client: Maria R. • {fake.product}
                  {"\n"}Carrier: {fake.carrier}
                  {"\n"}Premium: {fake.monthly} • Face: $250,000
                </div>
              </div>

              <div
                ref={discordCardRef}
                className="rounded-3xl border border-white/[0.04] p-5"
                style={{
                  willChange: 'transform, opacity, scale',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%, #000000 100%)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img src="/disocrd_icon.png" alt="Discord" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/90 font-semibold">#wins</div>
                    <div className="text-white/55 text-sm">Discord</div>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-white/[0.04] bg-black p-4 text-xs text-white/75 font-mono whitespace-pre-wrap">
                  🚨 DEAL POSTED
                  {"\n"}Policy: {fake.policy}
                  {"\n"}Draft: {fake.draftDate} • State: {fake.state}
                  {"\n"}Annual: {fake.annual}
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
