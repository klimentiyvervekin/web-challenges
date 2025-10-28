export default function Tag({ tag }) {
  const className = tag === "admin" ? "tag tag--highlight" : "tag";
  return (
    <li className={className}>
      {tag}
    </li>
  );
}