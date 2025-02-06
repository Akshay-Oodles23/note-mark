import { Content, DraggableTopBar, RootLayout, Sidebar, ActionButtonsRow, NotePreviewList, MarkdownEditor } from "@/components"

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 bg-zinc-900/90">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-1 bg-zinc-900/95 border-l-white/20 border-r-0 border-t-0 border-b-0">
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>

  )
}

export default App