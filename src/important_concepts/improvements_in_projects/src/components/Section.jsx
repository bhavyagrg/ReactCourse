// export default function Section({title, id, children})
// {
//     return (
//         <section  id={id}>
//             <h2>{title}</h2>
//         {children}
//         </section>
//     );
// }

//proxy props

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
