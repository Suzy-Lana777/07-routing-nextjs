// app/docs/[...slug]/page.tsx

type Props = {
  params: { slug?: string[] }; // slug може бути необов’язковим
};

export default function DocsPage({ params }: Props) {
  const { slug } = params;

  return (
    <div>
      <h1>Docs page</h1>
      <p>Current path: {slug?.join(" / ") || "home"}</p>
    </div>
  );
}

