import { createFileRoute } from "@tanstack/react-router";
import { Playground } from "openapi-docs";
import { spec } from "#spec";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <Playground defaultSpec={spec} />;
}
