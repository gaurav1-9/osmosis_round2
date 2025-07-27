import MobileViewPage from "./MobileViewPage"
import CareerExplore from "./Navigation/CareerExplore"
import Dashboard from "./Navigation/Dashboard"
import Projects from "./Navigation/Projects"
import SkillsMap from "./Navigation/SkillsMap"

const MainContent = ({ navigation }) => {
    return (
        <div className="w-full min-h-screen lg:pl-89 px-5 pt-28 py-4">
            <div className="hidden lg:flex w-full min-h-full bg-whiteSmoke p-3 rounded-xl">
                {
                    (navigation === 0)
                        ? <Dashboard />
                        : (navigation === 1)
                            ? <SkillsMap />
                            : (navigation === 2)
                                ? <Projects />
                                : <CareerExplore />
                }
            </div>
            <MobileViewPage />
        </div>
    )
}

export default MainContent