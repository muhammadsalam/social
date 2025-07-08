export default async function RegisterPage({
    params,
}: {
    params: Promise<{ registerId: string }>;
}) {
    const { registerId } = await params;

    return (
        <div>
            <h1>Register {registerId}</h1>
        </div>
    );
}
