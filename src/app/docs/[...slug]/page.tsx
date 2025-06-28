export default async function DocsPage({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    console.log(params);
    const { slug } = await params;

    return (
        <div>
            <h1>Docs {slug}</h1>
        </div>
    );
}
