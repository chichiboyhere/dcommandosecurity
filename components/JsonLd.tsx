// components/JsonLd.tsx
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  //SEO PURPOSE
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
