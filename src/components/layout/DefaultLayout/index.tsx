import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import avatar from "components/img/avatar.jpeg"
import { useContext, useEffect } from "react";
import { useRouter } from "next/router"
import Topbar from "@/components/Topbar/Topbar";

// import { LayoutContext } from "contexts/LayoutProvider";


export default function DefaultLayout({ title, children }: {
  title: String,
  // pageTitle: String,
  children: React.ReactNode,
  // problemPage: boolean,
}) {
  // const { pageTitle: layoutPageTitle, setPageTitle } = useContext(LayoutContext)
  // useEffect(() => {
  //   setPageTitle(pageTitle)
  // }, [pageTitle])

  // const router = useRouter()

  // useEffect(() => {
  //   if (!isLoadingUser) {
  //     if (!isAuthenticated) {
  //       router.replace("/login", "/login")
  //     }
  //   }
  // }, [
  //   isAuthenticated,
  //   isLoadingUser
  // ])

  // async function handleLogout() {
  //   let text = "Are you sure log out?";
  //   if (confirm(text) == true) {
  //     logout();
  //     refetchMe();
  //   }
  // }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-400 flex-row justify-center mt-14 px-36 bg-white-blue">
        <Topbar problemPage />
        <div className="w-full space-y-6 min-h-screen">
          {/* <div className="flex h-full w-60 shrink-0" />
              <div className="flex flex-col h-screen relative max-w-full w-full"> */}
          {/* <PageHeader pageTitle={layoutPageTitle} /> */}
          <main className="h-full flex flex-col w-full pt-5">
            <div className="h-full w-full"> {children} </div>
          </main>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}