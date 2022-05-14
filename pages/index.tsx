import type { NextPage } from 'next';
import { Header } from '@/components/Header';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
    const Map = dynamic(() => import('@/components/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
    });

    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="flex h-screen flex-col justify-between">
                <main>
                    <Header>
                        <h1 className="py-10">
                            COVID occurrence map by location
                        </h1>
                    </Header>
                    <Map />
                </main>

                <footer></footer>
            </div>
        </div>
    );
};

export default Home;
