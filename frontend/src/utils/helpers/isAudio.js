export default attachments => {
    if (!attachments) {
      return false;
    }
    const file = attachments[0];
    return attachments.length && file.ext === "webm";
  };
  