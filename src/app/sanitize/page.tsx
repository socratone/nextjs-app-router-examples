import sanitizeHtml from 'sanitize-html';

const Page = () => {
  const html = '<p>스크립트 태그가 이어짐</p><script>alert("XSS")</script>';

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} />
    </div>
  );
};

export default Page;
