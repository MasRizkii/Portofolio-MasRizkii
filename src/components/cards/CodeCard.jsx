function CodeCard() {
  return (
    <div className="glass-card w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/15 px-5 py-3">
        <span className="font-mono text-xs text-white/70">&lt;/&gt; Code</span>
        <span className="h-3 w-3 rounded-full bg-lime-500" />
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-white/80">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-300">developer</span> = {"{"}
          {"\n"} {"  "}
          <span className="text-pink-300">name</span>:{" "}
          <span className="text-yellow-300">&quot;Rizki&quot;</span> ,
          {"\n"} {"  "}
          <span className="text-pink-300">skills</span>: [
          {"\n"} {"    "}
          <span className="text-yellow-300">&quot;HTML&quot;</span>,{" "}
          <span className="text-yellow-300">&quot;CSS&quot;</span>,
          {"\n"} {"    "}
          <span className="text-yellow-300">&quot;JavaScript&quot;</span>,{" "}
          <span className="text-yellow-300">&quot;React&quot;</span>
          {"\n"} {"  "}],
          {"\n"} {"  "}
          <span className="text-pink-300">passions</span>:{" "}
          <span className="text-yellow-300">
            &quot;Building things for the web&quot;
          </span>
          {"\n"}
          {"}"};
        </code>
      </pre>
    </div>
  );
}

export default CodeCard;
