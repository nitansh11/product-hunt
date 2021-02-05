export const postLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const filterJobs = (jobs, formValues) => {
  let filteredJobs = jobs;
  console.log("All jobs are:", filteredJobs);
  console.log("Form values are:", formValues);
  // filter based on remote
  if (formValues.remote) {
    console.log("getting out remote values", filteredJobs);
    filteredJobs = filteredJobs.filter((job) => {
      return job.tags.includes("remote");
    });
    console.log("now filtered jobs are:", filteredJobs);
  }

  //filter based on location
  if (formValues.location !== "none") {
    filteredJobs = filteredJobs.filter((job) => {
      return job.location
        .toLowerCase()
        .includes(formValues.location.toLowerCase());
    });
  }

  //filter based on other job domain type

  if (
    formValues.engineering ||
    formValues.customerSupport ||
    formValues.design ||
    formValues.marketing ||
    formValues.product ||
    formValues.sales
  ) {
    let trueFilters = [];
    for (let key in formValues) {
      if (key === "engineering" && formValues[key]) {
        trueFilters.push("engineering");
      }
      if (key === "customerSupport" && formValues[key]) {
        trueFilters.push("customer-support");
      }
      if (key === "design" && formValues[key]) {
        trueFilters.push("design");
      }
      if (key === "marketing" && formValues[key]) {
        trueFilters.push("marketing");
      }
      if (key === "product" && formValues[key]) {
        trueFilters.push("product");
      }
      if (key === "sales" && formValues[key]) {
        trueFilters.push("sales");
      }
    }
    console.log("true filters are:", trueFilters);
    let newFilteredJobs = [];
    for (let i = 0; i < filteredJobs.length; i++) {
      //check this job if it contains any of the true filter
      let passed = false;
      for (let j = 0; j < trueFilters.length; j++) {
        if (filteredJobs[i].tags.includes(trueFilters[j])) {
          passed = true;
          break;
        }
      }
      if (passed) {
        newFilteredJobs.push(filteredJobs[i]);
      }
    }
    console.log("new Filteed Jobs:", newFilteredJobs);
    filteredJobs = newFilteredJobs;
  }
  return filteredJobs;
};
/*
customerSupport: false
design: false
engineering: false
location: "denmark"
marketing: true
product: false
remote: true
sales: true
*/
