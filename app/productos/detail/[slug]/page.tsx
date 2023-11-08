
type Params = {
    slug: string
}

const DetailPage = ({params} : {params: Params}) => {
    const {slug} = params

    return (
        <main className="container m-auto mt-10">
            hola {slug}
        </main>
    )
}

export default DetailPage