// app/notes/filter/layout.tsx

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode; // слот паралельного сегмента @sidebar
};

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section style={{ display: 'flex', gap: 20 }}>
      <aside style={{ width: 240, padding: 12, background: '#f6f6f6', borderRadius: 12 }}>
        {sidebar}
      </aside>
      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}

