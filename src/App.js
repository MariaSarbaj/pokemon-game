import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";

import bg1 from './assets/bg1.jpg'

const App = () => {
    const idList = [`layout1`, `layout2`, `layout3`];
    const bgColor = `#74e1ff`;

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
                urlBg={bg1}
            />

            <Layout
                id={idList[1]}
                title="Second Layout"
                descr="This is Description!"
                colorBg={bgColor}
            />

            <Layout
                id={idList[3]}
                title="Third Layout"
                descr="This is Description!"
                urlBg={bg1}
            />

            <Footer />
        </>
    )
}

export default App;
