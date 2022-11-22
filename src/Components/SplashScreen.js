



export default function SplashScreen ({ database }) {

    return (
        <>
        {database ?
            <p>{database[0].projects[0].title}</p>
        : null }
        </>
    )
}