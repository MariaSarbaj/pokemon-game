import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";

const App = () => {
    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />

            <Layout
                id="layout1"
                title="First Layout"
                descr="This is Description!"
                urlBg
            />

            <Layout
                id="layout2"
                title="Second Layout"
                descr="This is Description!"
                colorBg
            />

            <Layout
                id="layout3"
                title="Third Layout"
                descr="This is Description!"
                urlBg
            />

            <Footer />
        </>
    )
}

export default App;
