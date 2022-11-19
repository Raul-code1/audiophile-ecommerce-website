
import { MainLayout } from "../components/shared/layout/MainLayout"
import { CategoryThumbnail, EarphonesYXone, FirstSectionHome, SpeakerZXNine, SpeakerZXSeven } from "../components"


export const HomePage = () => {
  return (
    <MainLayout>
      
      <FirstSectionHome />
      <CategoryThumbnail />
      {/* Products */}
      <SpeakerZXNine />

      <SpeakerZXSeven />

      <EarphonesYXone />
    </MainLayout>
  )
}
