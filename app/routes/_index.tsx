import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "IPMS" },
    { name: "description", content: "Welcome to IPMS!" },
  ];
};




export default function Index() {
  return (

<div>
  <h1>Hello World </h1>
  <a href="/hello">Go to Hello</a>
</div>

  );
}

