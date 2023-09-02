import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// state에 axios 요청값을 할당함으로써 동적으로 css 효과를 줄 수 있다.
const state = true;

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone</p>
      {/* cn을 사용하면 오버라이드 되어 bg-red-500이 적용된다.*/}
      <Button className={cn("bg-indigo-500", state && "bg-red-500")}>Click me</Button>
    </div>
  );
}
