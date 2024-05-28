
(async () => {
  console.log("🚀 Extension successfully installed!");

  const filters = ["*profile-displayphoto-*", "*company-logo*", "*profile-framedphoto-*", "*group-logo*"];

  const newRules: unknown[] = filters.map((f, i) => {
    return {
      id: i + 1,
      priority: i + 1,
      action: {
        type: "redirect",
        redirect: {
          extensionPath: "/pedro.gif",
        },
      },
      condition: {
        urlFilter: f,
        resourceTypes: ["image"],
      },
    };
  });

  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldRuleIds = oldRules.map((rule) => rule.id);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: newRules as chrome.declarativeNetRequest.Rule[],
  });
})();
