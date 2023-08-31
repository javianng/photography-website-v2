import type { NextPage } from "next";
import PageLayout from "~/components/common/PageLayout";
import Header from "~/components/homepage/Header";


const Home: NextPage = () => {
    return (
        <PageLayout>
            <main>
                <div>
                    <Header />
                </div>
            </main>
        </PageLayout>
    );
};

export default Home;