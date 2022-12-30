import { Box, Heading, Progress } from "@chakra-ui/react";
import { AnimatePresence, m, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedBox = motion(Box);
function PageLoading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 700);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {loading && <PageLogoWithLoading />}
    </AnimatePresence>
  );
}

export default PageLoading;
function PageLogoWithLoading() {
  return (
    <motion.div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        zIndex: 100000,
        background: "#f1f1d120",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Image
          src="/og_big.png"
          alt="terra dashboard logo"
          width={100}
          height={100}
        />
      </motion.div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Heading>Please wait...</Heading>
        <Progress size="xs" isIndeterminate />
      </motion.div>
    </motion.div>
  );
}
