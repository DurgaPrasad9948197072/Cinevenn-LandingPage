import Landing from "@/components/Landing";

/** Default variant — visitors outside the UK and India (and any visitor
    whose country the host doesn't report). */
export default function Page() {
  return <Landing region="intl" />;
}
