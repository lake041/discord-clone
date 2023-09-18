// SSR 환경에서 초기 렌더링 시점에 클라이언트 측 전용 객체인 window 객체에 접근하려고 하면 에러가 발생한다.
// 따라서 mounted 상태 값을 통해 실제 클라이언트 환경에서만 window.location.origin 값에 접근하도록 한다.

import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

  if (!mounted) {
    return "";
  }

  return origin;
};
