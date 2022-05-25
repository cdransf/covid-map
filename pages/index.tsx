import type { NextPage } from 'next';
import { Header } from '@/components/Header';
import dynamic from 'next/dynamic';
import { LoadingFrame } from '@/components/loading';

const Home: NextPage = () => {
    const Map = dynamic(() => import('@/components/map/MapWrapper'), {
        loading: () => <LoadingFrame />,
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
