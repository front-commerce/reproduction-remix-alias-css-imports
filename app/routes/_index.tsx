import type { MetaFunction } from "@remix-run/node";
import Button from "theme/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Button>15m Quickstart Blog Tutorial</Button>
        </li>
        <li>
          <Button>Deep Dive Jokes App Tutorial</Button>
        </li>
        <li>
          <Button>Remix Docs</Button>
        </li>
      </ul>
    </div>
  );
}
