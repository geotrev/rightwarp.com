import { Container } from "./Container"
import { ThemeController } from "./ThemeController"

export const Header = () => {
  return (
    <Container tag="header" className="flex justify-between py-12">
      Header <ThemeController />
    </Container>
  )
}
