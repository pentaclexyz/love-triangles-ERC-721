import React from "react";
import LoveTrianglesFunction from "../../components/love-triangles/love-triangles-function";
import Header from "../../components/header";
import Layout from "../../components/layout";

export const LoveTrianglesPage = () => {
    return (
        <>
            <Header/>
            <Layout>
                <LoveTrianglesFunction/>
            </Layout>
        </>
    )
}
