import React from "react";
import Container from "@/components/Layout/Container";
//import Loader from "@/components/Layout/Loading";
import Link from "next/link";
import useTodoList from "@/hooks/useTodoList";

const itemsPerPage = 10;

const List: React.FC = () => {
    const { notices, loading, error } = useTodoList();

    // if (loading) return <Loader />;
    // if (error) return <p>Error: {error.message}</p>;

    return (
        <Container>
            <div className="min-h-screen">
                <div className="flex flex-wrap justify-center relative">
                    <div className="flex flex-col items-center w-1/2">
                        <div className="w-full border-t-2"></div>
                        <div className="flex flex-col justify-center align-middle m-auto w-full">
                            {notices.length === 0 ? (
                                <div className="w-full h-full flex flex-col justify-center items-center space-y-8 inline-flex px-28 py-12">
                                    <p className="text-center text-[#707070] text-lg font-normal leading-7 break-words">
                                        등록된 할일이 없습니다 !!!
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="w-full border-t-2"></div>
                                    <div className="flex flex-col justify-center align-middle m-auto w-full">
                                        {notices.map((notice) => (
                                            <div
                                                key={notice.id}
                                                className="flex-grow p-6 hover:bg-[#EFF0F3] cursor-pointer"
                                            >
                                                <Link
                                                    href={`/read/${notice.id}`}
                                                >
                                                    <p className="text-lg text-[#222222]">
                                                        {notice.title.length >
                                                        100
                                                            ? `${notice.title.substring(
                                                                  0,
                                                                  100
                                                              )}...`
                                                            : notice.title}
                                                    </p>
                                                    <p className="text-lg text-[#707070]">
                                                        {notice.content}
                                                    </p>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full border-2"></div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default List;
