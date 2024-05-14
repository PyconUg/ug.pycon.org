export default function BlogHeader({ title, subtitle, date }) {
  return (
    <div className="bg-primary py-28">
      <h1 className="text-2xl font-bold tracking-tighter md:text-3xl text-white text-center">
        {title}
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 pt-4">
        {subtitle}
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400 pt-4">
        {date}
      </p>
    </div>
  );
}
