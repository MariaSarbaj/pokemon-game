import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";

const App = () => {
    const idList = [`layout1`, `layout2`, `layout3`]

    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />

            <Layout
                id={idList[0]}
                title="First Layout"
                descr="This is Description!"
                urlBg
            />

            <Layout
                id={idList[1]}
                title="Second Layout"
                descr="This is Description!"
                colorBg
            />

            <Layout
                id={idList[3]}
                title="Third Layout"
                descr="This is Description!"
                urlBg
            />

            <Footer />
        </>
    )
}

export default App;
