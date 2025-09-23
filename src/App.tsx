import { HowtoForwardRef } from "./components/HowtoForwardRef/HowtoForwardRef";
import { HowtoFunctionComponent } from "./components/HowtoFunctionComponent/HowtoFunctionComponent";
import { HowtoIntersectionObserver } from "./components/HowtoIntersectionObserver/HowtoIntersectionObserver";
import { HowtoNamedFunction } from "./components/HowtoNamedFunction/HowtoNamedFunction";
import { HowtoUseMemoWith } from "./components/HowtoUseMemoWith/HowtoUseMemoWith";
import { HowtoUseMemoWithout } from "./components/HowtoUseMemoWithout/HowtoUseMemoWithout";
import { HowtoWrapper } from "./components/HowtoWrapper/HowtoWrapper";

function App() {
	return (
		<div className="flex flex-col gap-3">
			<HowtoWrapper
				title="forwardRef()"
				description="allows a component to receive a ref from its parent and pass it to one of its child components"
			>
				<HowtoForwardRef />
			</HowtoWrapper>
			<HowtoWrapper
				title="Named function"
				description="improves stack traces and dev tools labeling, React will show the name of the function in the component tree"
			>
				<HowtoNamedFunction />
			</HowtoWrapper>
			<HowtoWrapper
				title="IntersectionObserver"
				description="detects when an element enters or exits the viewport (or another parent element), without constantly polling or listening to scroll events"
			>
				<HowtoIntersectionObserver />
			</HowtoWrapper>
			<HowtoWrapper
				title="React.FunctionComponent"
				description={"Uses React.FunctionCompononent<Props>"}
			>
				<HowtoFunctionComponent message="testing message" />
			</HowtoWrapper>
			<HowtoWrapper
				title="Searching without useMemo()"
				description="when you change the theme, the filtering and sorting logic still runs on every render"
			>
				<HowtoUseMemoWithout />
			</HowtoWrapper>
			<HowtoWrapper
				title="Searching with useMemo()"
				description="with useMemo(), changing the theme does not trigger re-sorting or re-filtering"
			>
				<HowtoUseMemoWith />
			</HowtoWrapper>

			<div className="mb-[5rem]" />
		</div>
	);
}

export default App;
