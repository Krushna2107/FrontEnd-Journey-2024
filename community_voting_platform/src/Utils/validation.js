export const validatePollForm = (question, options) => {
    if (!question) return "Question is required";
    if (options.length < 2) return "At least two options are required";
    return null;
  };
  