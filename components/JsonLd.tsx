// components/JsonLd.tsx
export default function JsonLd({ data }: { data: Record<string, any> }) {
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
