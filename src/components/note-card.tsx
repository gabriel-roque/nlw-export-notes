export function NoteCard() {
  return (
    <button
      className="rounded-md text-left bg-slate-800 p-5 space-y-3 
      overflow-hidden relative hover:ring-2 hover:ring-slate-600 
      outline-none focus:ring-2 focus:ring-lime-400"
    >
      <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
        architecto facere exercitationem, eum doloremque molestias sunt nisi
        doloribus dignissimos illo aliquam esse inventore similique quibusdam
        explicabo voluptatum perspiciatis voluptate ipsam! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Alias architecto facere
        exercitationem, eum doloremque molestias sunt nisi doloribus dignissimos
        illo aliquam esse inventore similique quibusdam explicabo voluptatum
        perspiciatis voluptate ipsam!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to to-black/0 pointer-events-none" />
    </button>
  );
}
