(() => {
  "use strict";

  const flavorIds = ["sunny-nuts", "berry-morning", "cacao-quiet"];

  const questionConfig = [
    {
      name: "morning-start",
      weight: 2,
      summaryLabel: "今日の朝",
    },
    {
      name: "preferred-flavor",
      weight: 3,
      summaryLabel: "好きな味",
    },
    {
      name: "pairing",
      weight: 1,
      summaryLabel: "合わせたいもの",
    },
  ];

  const flavorData = {
    "sunny-nuts": {
      name: "SUNNY NUTS",
      description: "香ばしいナッツと、\nはちみつのやさしい甘さ。",
      reason:
        "しっかり満たしたい朝や、\n香ばしい味を選びたい今の気分に合うフレーバーです。",
      eatingStyle: "牛乳や豆乳をかけて。",
      resultImage:
        "./assets/02_assets/images/flavor-key-visuals/sp/result_sunny-nuts_sp_3x4.jpg",
      resultImagePc:
        "./assets/02_assets/images/flavor-key-visuals/pc/result_sunny-nuts_pc_4x3.jpg",
      resultImageAlt:
        "SUNNY NUTSのクラフトグラノーラを楽しむ朝のイメージ",
      eatingIcon: "./assets/02_assets/icons/how-to-eat/icon_milk-soymilk.png",
      boxImage:
        "./assets/01_brand/package/box/trial-box_full-set_sunny-nuts.jpg",
    },
    "berry-morning": {
      name: "BERRY MORNING",
      description: "ベリーの軽やかな酸味と、\nほのかな甘さ。",
      reason:
        "軽やかに始めたい朝や、\n甘酸っぱい味を選びたい今の気分に合うフレーバーです。",
      eatingStyle: "ヨーグルトと合わせて。",
      resultImage:
        "./assets/02_assets/images/flavor-key-visuals/sp/result_berry-morning_sp_3x4.jpg",
      resultImagePc:
        "./assets/02_assets/images/flavor-key-visuals/pc/result_berry-morning_pc_4x3.jpg",
      resultImageAlt:
        "BERRY MORNINGのクラフトグラノーラを楽しむ朝のイメージ",
      eatingIcon: "./assets/02_assets/icons/how-to-eat/icon_yogurt.png",
      boxImage:
        "./assets/01_brand/package/box/trial-box_full-set_berry-morning.jpg",
    },
    "cacao-quiet": {
      name: "CACAO QUIET",
      description: "カカオの落ち着いたコクと、\nバナナの自然な甘さ。",
      reason:
        "少し甘いものが欲しい朝や、\n落ち着いた味を選びたい今の気分に合うフレーバーです。",
      eatingStyle: "コーヒーと一緒に。",
      resultImage:
        "./assets/02_assets/images/flavor-key-visuals/sp/result_cacao-quiet_sp_3x4.jpg",
      resultImagePc:
        "./assets/02_assets/images/flavor-key-visuals/pc/result_cacao-quiet_pc_4x3.jpg",
      resultImageAlt:
        "CACAO QUIETのクラフトグラノーラを楽しむ朝のイメージ",
      eatingIcon: "./assets/02_assets/icons/how-to-eat/icon_coffee.png",
      boxImage:
        "./assets/01_brand/package/box/trial-box_full-set_cacao-quiet.jpg",
    },
  };

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollToSection = (element) => {
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  const saveSession = (diagnosisResult, selectedExtraFlavor, setBreakdown) => {
    try {
      if (flavorData[diagnosisResult]) {
        sessionStorage.setItem("diagnosisResult", diagnosisResult);
      } else {
        sessionStorage.removeItem("diagnosisResult");
      }

      if (flavorData[selectedExtraFlavor]) {
        sessionStorage.setItem("selectedExtraFlavor", selectedExtraFlavor);
        sessionStorage.setItem("setBreakdown", JSON.stringify(setBreakdown));
      } else {
        sessionStorage.removeItem("selectedExtraFlavor");
        sessionStorage.removeItem("setBreakdown");
      }
    } catch {
      // Storageが利用できない環境でも診断自体は継続する。
    }
  };

  const clearSession = () => {
    try {
      sessionStorage.removeItem("diagnosisResult");
      sessionStorage.removeItem("selectedExtraFlavor");
      sessionStorage.removeItem("setBreakdown");
    } catch {
      // Storageが利用できない環境でも再診断は継続する。
    }
  };

  const readStoredFlavorState = () => {
    try {
      const diagnosisResult = sessionStorage.getItem("diagnosisResult");
      const selectedExtraFlavor = sessionStorage.getItem("selectedExtraFlavor");
      const storedDiagnosisResult = flavorData[diagnosisResult]
        ? diagnosisResult
        : null;

      return {
        diagnosisResult: storedDiagnosisResult,
        selectedExtraFlavor: flavorData[selectedExtraFlavor]
          ? selectedExtraFlavor
          : storedDiagnosisResult || flavorIds[0],
      };
    } catch {
      return {
        diagnosisResult: null,
        selectedExtraFlavor: flavorIds[0],
      };
    }
  };

  const flavorState = readStoredFlavorState();
  const flavorStateListeners = new Set();

  const createSetBreakdown = (extraFlavorId) => {
    const breakdown = Object.fromEntries(
      flavorIds.map((flavorId) => [flavorId, 2]),
    );

    if (breakdown[extraFlavorId] !== undefined) {
      breakdown[extraFlavorId] += 1;
    }

    return breakdown;
  };

  const notifyFlavorState = () => {
    flavorStateListeners.forEach((listener) => {
      listener({ ...flavorState });
    });
  };

  const persistFlavorState = () => {
    const setBreakdown = flavorState.selectedExtraFlavor
      ? createSetBreakdown(flavorState.selectedExtraFlavor)
      : null;

    saveSession(
      flavorState.diagnosisResult,
      flavorState.selectedExtraFlavor,
      setBreakdown,
    );
  };

  const setDiagnosisResult = (flavorId) => {
    if (!flavorData[flavorId]) {
      return;
    }

    flavorState.diagnosisResult = flavorId;
    flavorState.selectedExtraFlavor = flavorId;
    persistFlavorState();
    notifyFlavorState();
  };

  const updateSelectedExtraFlavor = (flavorId) => {
    if (!flavorData[flavorId]) {
      return;
    }

    flavorState.selectedExtraFlavor = flavorId;
    persistFlavorState();
    notifyFlavorState();
  };

  const resetFlavorState = () => {
    flavorState.diagnosisResult = null;
    flavorState.selectedExtraFlavor = flavorIds[0];
    clearSession();
    persistFlavorState();
    notifyFlavorState();
  };

  const initSpMenu = () => {
    const menu = document.querySelector(".sp-menu");
    const menuButton = menu?.querySelector(".sp-menu__button");
    const menuLinks = [
      ...(menu?.querySelectorAll('.sp-menu__link[href^="#"]') || []),
    ];
    const desktopNavigationQuery = window.matchMedia("(min-width: 1024px)");

    if (!menu || menuLinks.length === 0) {
      return;
    }

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.open = false;
        window.requestAnimationFrame(() => {
          menuButton?.focus({ preventScroll: true });
        });
      });
    });

    menu.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        event.preventDefault();
        menu.open = false;
        menuButton?.focus({ preventScroll: true });
      }
    });

    const closeMenuForDesktop = (event) => {
      if (event.matches) {
        menu.open = false;
      }
    };

    if ("addEventListener" in desktopNavigationQuery) {
      desktopNavigationQuery.addEventListener("change", closeMenuForDesktop);
    } else {
      desktopNavigationQuery.addListener(closeMenuForDesktop);
    }
  };

  const initFixedCta = () => {
    const hero = document.querySelector(".hero");
    const morningRoute = document.querySelector("#morning-route");
    const purchaseArea = document.querySelector("[data-trial-purchase-area]");
    const finalCta = document.querySelector("[data-final-cta]");
    const footer = document.querySelector("[data-site-footer]");
    const menu = document.querySelector(".sp-menu");
    const fixedCta = document.querySelector("[data-fixed-cta]");
    const fixedCtaAction = fixedCta?.querySelector("[data-fixed-cta-action]");

    if (!hero || !morningRoute || !fixedCta || !fixedCtaAction) {
      return;
    }

    const heroRect = hero.getBoundingClientRect();
    const fixedCtaState = {
      isHeroVisible:
        heroRect.bottom > 0 && heroRect.top < window.innerHeight,
      isMorningRouteVisible: false,
      isPurchaseAreaVisible: false,
      isMenuOpen: menu?.open || false,
      isFinalCtaVisible: false,
      isFooterVisible: false,
    };

    const updateFixedCta = () => {
      const isHidden =
        fixedCtaState.isHeroVisible ||
        fixedCtaState.isPurchaseAreaVisible ||
        fixedCtaState.isMenuOpen ||
        fixedCtaState.isFinalCtaVisible ||
        fixedCtaState.isFooterVisible;

      fixedCta.classList.toggle(
        "fixed-cta--compact",
        fixedCtaState.isMorningRouteVisible && !isHidden,
      );
      fixedCta.classList.toggle("fixed-cta--hidden", isHidden);
      fixedCtaAction.textContent = fixedCtaState.isMorningRouteVisible
        ? "お試し"
        : "試す";
    };

    if (menu) {
      menu.addEventListener("toggle", () => {
        fixedCtaState.isMenuOpen = menu.open;
        updateFixedCta();
      });
    }

    if ("IntersectionObserver" in window) {
      const observedSections = new Map(
        [
          [hero, "isHeroVisible"],
          [morningRoute, "isMorningRouteVisible"],
          [purchaseArea, "isPurchaseAreaVisible"],
          [finalCta, "isFinalCtaVisible"],
          [footer, "isFooterVisible"],
        ].filter(([element]) => element),
      );

      const fixedCtaObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const stateKey = observedSections.get(entry.target);

            if (stateKey) {
              fixedCtaState[stateKey] = entry.isIntersecting;
            }
          });

          updateFixedCta();
        },
        {
          threshold: [0, 0.05],
        },
      );

      observedSections.forEach((_, element) => {
        fixedCtaObserver.observe(element);
      });
    } else {
      fixedCtaState.isMenuOpen = menu?.open || false;
    }

    updateFixedCta();
  };

  const initPortfolioPurchaseDialog = () => {
    const dialog = document.querySelector("#portfolio-purchase-dialog");
    const purchaseTriggers = [
      ...document.querySelectorAll(".js-open-portfolio-dialog"),
    ];
    const closeButtons = [
      ...(dialog?.querySelectorAll("[data-portfolio-dialog-close]") || []),
    ];
    const closeButton = dialog?.querySelector(".portfolio-dialog__close");
    const extraFlavorName = dialog?.querySelector(
      "[data-portfolio-extra-flavor]",
    );
    const breakdownValues = [
      ...(dialog?.querySelectorAll("[data-portfolio-breakdown-flavor]") || []),
    ];

    if (
      !dialog ||
      typeof dialog.showModal !== "function" ||
      purchaseTriggers.length === 0 ||
      closeButtons.length !== 2 ||
      !closeButton ||
      !extraFlavorName ||
      breakdownValues.length !== flavorIds.length
    ) {
      return;
    }

    let lastPurchaseTrigger = null;

    const updateDialogSelection = () => {
      const selectedExtraFlavor =
        flavorState.selectedExtraFlavor ||
        flavorState.diagnosisResult ||
        flavorIds[0];
      const selectedFlavor = flavorData[selectedExtraFlavor];

      if (!selectedFlavor) {
        return;
      }

      const setBreakdown = createSetBreakdown(selectedExtraFlavor);
      extraFlavorName.textContent = selectedFlavor.name;

      breakdownValues.forEach((element) => {
        const flavorId = element.dataset.portfolioBreakdownFlavor;
        element.textContent = `×${setBreakdown[flavorId]}`;
      });
    };

    purchaseTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        lastPurchaseTrigger = trigger;
        updateDialogSelection();

        if (!dialog.open) {
          dialog.showModal();
          window.requestAnimationFrame(() => {
            closeButton.focus({ preventScroll: true });
          });
        }
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        dialog.close();
      });
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    dialog.addEventListener("close", () => {
      const triggerToRestore = lastPurchaseTrigger;
      lastPurchaseTrigger = null;

      window.requestAnimationFrame(() => {
        triggerToRestore?.focus({ preventScroll: true });
      });
    });
  };

  const initFinalCta = () => {
    const section = document.querySelector("[data-final-cta]");
    const extraFlavorName = section?.querySelector(
      "[data-final-extra-flavor]",
    );
    const breakdownValues = [
      ...(section?.querySelectorAll("[data-final-breakdown-flavor]") || []),
    ];
    const purchaseButton = section?.querySelector(
      "[data-final-purchase-button]",
    );

    if (
      !section ||
      !extraFlavorName ||
      breakdownValues.length !== flavorIds.length ||
      !purchaseButton
    ) {
      return;
    }

    const syncFinalCta = (state) => {
      const selectedExtraFlavor =
        state.selectedExtraFlavor || state.diagnosisResult || flavorIds[0];
      const selectedFlavor = flavorData[selectedExtraFlavor];

      if (!selectedFlavor) {
        return;
      }

      const setBreakdown = createSetBreakdown(selectedExtraFlavor);

      extraFlavorName.textContent = selectedFlavor.name;
      breakdownValues.forEach((element) => {
        const flavorId = element.dataset.finalBreakdownFlavor;
        element.textContent = `×${setBreakdown[flavorId]}`;
      });

      purchaseButton.textContent = state.diagnosisResult
        ? "この組み合わせで7日間試す"
        : "7日間の朝食を試してみる";
    };

    flavorStateListeners.add(syncFinalCta);
    syncFinalCta(flavorState);
  };

  const initDiagnosis = () => {
    const morningRoute = document.querySelector("#morning-route");
    const diagnosis = document.querySelector("[data-diagnosis]");
    const form = document.querySelector("[data-diagnosis-form]");
    const steps = [...document.querySelectorAll("[data-question-step]")];
    const progressText = document.querySelector("[data-question-progress]");
    const progressBar = document.querySelector("[data-question-progress-bar]");
    const backButton = document.querySelector("[data-diagnosis-back]");
    const nextButton = document.querySelector("[data-diagnosis-next]");
    const resultSection = document.querySelector("#your-flavor");
    const resultHeading = document.querySelector("#your-flavor-title");
    const retryButton = document.querySelector("[data-diagnosis-retry]");
    const extraFlavorInputs = [
      ...document.querySelectorAll('input[name="extra-flavor"]'),
    ];

    if (
      !morningRoute ||
      !diagnosis ||
      !form ||
      steps.length !== questionConfig.length ||
      !progressText ||
      !progressBar ||
      !backButton ||
      !nextButton ||
      !resultSection ||
      !resultHeading ||
      !retryButton ||
      extraFlavorInputs.length !== flavorIds.length
    ) {
      return;
    }

    const resultElements = {
      name: resultSection.querySelector("[data-result-name]"),
      description: resultSection.querySelector("[data-result-description]"),
      image: resultSection.querySelector("[data-result-image]"),
      imageSource: resultSection.querySelector("[data-result-image-source]"),
      reason: resultSection.querySelector("[data-result-reason]"),
      eating: resultSection.querySelector("[data-result-eating]"),
      eatingIcon: resultSection.querySelector("[data-result-eating-icon]"),
      setImage: resultSection.querySelector("[data-set-image]"),
      answerValues: [
        ...resultSection.querySelectorAll("[data-result-answer]"),
      ],
      breakdownValues: [
        ...resultSection.querySelectorAll("[data-breakdown-flavor]"),
      ],
    };

    const hasAllResultElements =
      resultElements.name &&
      resultElements.description &&
      resultElements.image &&
      resultElements.imageSource &&
      resultElements.reason &&
      resultElements.eating &&
      resultElements.eatingIcon &&
      resultElements.setImage &&
      resultElements.answerValues.length === questionConfig.length &&
      resultElements.breakdownValues.length === flavorIds.length;

    if (!hasAllResultElements) {
      return;
    }

    let currentQuestionIndex = 0;
    let answers = questionConfig.map(() => null);

    const showQuestion = (questionIndex, moveFocus = true) => {
      currentQuestionIndex = questionIndex;

      steps.forEach((step, index) => {
        step.hidden = index !== questionIndex;
      });

      const currentNumber = questionIndex + 1;
      progressText.textContent = `QUESTION ${currentNumber} / ${steps.length}`;
      progressBar.value = currentNumber;
      progressBar.textContent = `${currentNumber} / ${steps.length}`;

      backButton.hidden = questionIndex === 0;
      nextButton.textContent =
        questionIndex === steps.length - 1 ? "結果を見る" : "次へ";
      nextButton.disabled = !answers[questionIndex];

      if (moveFocus) {
        const questionLegend = steps[questionIndex].querySelector("legend");
        window.requestAnimationFrame(() => {
          questionLegend?.focus({ preventScroll: true });
        });
      }
    };

    const calculateResult = () => {
      const scores = Object.fromEntries(
        flavorIds.map((flavorId) => [flavorId, 0]),
      );

      answers.forEach((answer, index) => {
        if (answer && scores[answer.flavorId] !== undefined) {
          scores[answer.flavorId] += questionConfig[index].weight;
        }
      });

      const highestScore = Math.max(...Object.values(scores));
      const tiedFlavorIds = flavorIds.filter(
        (flavorId) => scores[flavorId] === highestScore,
      );

      if (tiedFlavorIds.length === 1) {
        return tiedFlavorIds[0];
      }

      const priorityAnswers = [answers[1], answers[0], answers[2]];
      const priorityMatch = priorityAnswers.find((answer) =>
        tiedFlavorIds.includes(answer?.flavorId),
      );

      return priorityMatch?.flavorId || tiedFlavorIds[0];
    };

    const updateSetDisplay = () => {
      const { selectedExtraFlavor } = flavorState;

      extraFlavorInputs.forEach((input) => {
        input.checked = input.value === selectedExtraFlavor;
      });

      if (!selectedExtraFlavor) {
        return;
      }

      const setBreakdown = createSetBreakdown(selectedExtraFlavor);
      const selectedFlavor = flavorData[selectedExtraFlavor];

      resultElements.breakdownValues.forEach((element) => {
        const flavorId = element.dataset.breakdownFlavor;
        element.textContent = `×${setBreakdown[flavorId]}`;
      });

      resultElements.setImage.src = selectedFlavor.boxImage;
      resultElements.setImage.alt =
        `${selectedFlavor.name}を1袋追加した、` +
        `SUNNY NUTS ${setBreakdown["sunny-nuts"]}袋、` +
        `BERRY MORNING ${setBreakdown["berry-morning"]}袋、` +
        `CACAO QUIET ${setBreakdown["cacao-quiet"]}袋の7袋セット`;
    };

    const renderResult = () => {
      const resultData = flavorData[flavorState.diagnosisResult];

      if (!resultData) {
        return;
      }

      resultElements.name.textContent = resultData.name;
      resultElements.description.textContent = resultData.description;
      resultElements.image.src = resultData.resultImage;
      resultElements.imageSource.srcset = resultData.resultImagePc;
      resultElements.image.alt = resultData.resultImageAlt;
      resultElements.reason.textContent = resultData.reason;
      resultElements.eating.textContent = resultData.eatingStyle;
      resultElements.eatingIcon.src = resultData.eatingIcon;

      resultElements.answerValues.forEach((element, index) => {
        element.textContent = answers[index]?.label || "";
      });

      updateSetDisplay();
    };

    const showResult = () => {
      setDiagnosisResult(calculateResult());
      renderResult();
      resultSection.hidden = false;
      resultHeading.focus({ preventScroll: true });
      scrollToSection(resultSection);
    };

    const resetDiagnosis = () => {
      form.reset();
      answers = questionConfig.map(() => null);
      currentQuestionIndex = 0;
      resultSection.hidden = true;
      resetFlavorState();
      showQuestion(0, false);
      scrollToSection(morningRoute);

      const firstLegend = steps[0].querySelector("legend");
      window.requestAnimationFrame(() => {
        firstLegend?.focus({ preventScroll: true });
      });
    };

    form.addEventListener("change", (event) => {
      const selectedInput = event.target.closest(
        '.choice-input[type="radio"]',
      );

      if (!selectedInput || selectedInput.name === "extra-flavor") {
        return;
      }

      const selectedStep = selectedInput.closest("[data-question-step]");
      const questionIndex = Number(selectedStep?.dataset.questionStep);

      if (!Number.isInteger(questionIndex) || !questionConfig[questionIndex]) {
        return;
      }

      answers[questionIndex] = {
        flavorId: selectedInput.value,
        label: selectedInput.dataset.answerLabel || selectedInput.value,
      };

      if (questionIndex === currentQuestionIndex) {
        nextButton.disabled = false;
      }
    });

    backButton.addEventListener("click", () => {
      if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
      }
    });

    nextButton.addEventListener("click", () => {
      if (!answers[currentQuestionIndex]) {
        return;
      }

      if (currentQuestionIndex < steps.length - 1) {
        showQuestion(currentQuestionIndex + 1);
        return;
      }

      showResult();
    });

    extraFlavorInputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (!input.checked || !flavorData[input.value]) {
          return;
        }

        updateSelectedExtraFlavor(input.value);
      });
    });

    flavorStateListeners.add(updateSetDisplay);
    retryButton.addEventListener("click", resetDiagnosis);
    updateSetDisplay();
    showQuestion(0, false);
  };

  const initFlavorCarousel = () => {
    const section = document.querySelector("[data-flavor-carousel]");
    const viewport = section?.querySelector("[data-flavor-viewport]");
    const cards = [...(section?.querySelectorAll("[data-flavor-card]") || [])];
    const previousButton = section?.querySelector("[data-flavor-previous]");
    const nextButton = section?.querySelector("[data-flavor-next]");
    const position = section?.querySelector("[data-flavor-position]");
    const guideLinks = [...document.querySelectorAll("[data-flavor-guide]")];

    if (
      !section ||
      !viewport ||
      cards.length !== flavorIds.length ||
      !previousButton ||
      !nextButton ||
      !position
    ) {
      return;
    }

    let currentIndex = Math.max(
      0,
      flavorIds.indexOf(flavorState.diagnosisResult || flavorIds[0]),
    );
    let scrollFrameId = 0;
    let resizeFrameId = 0;
    let lastDiagnosisResult = flavorState.diagnosisResult;

    const updateActiveCard = (nextIndex) => {
      currentIndex = Math.min(Math.max(nextIndex, 0), cards.length - 1);

      cards.forEach((card, index) => {
        const isActive = index === currentIndex;
        card.classList.toggle("flavor-card--active", isActive);

        if (isActive) {
          card.setAttribute("aria-current", "true");
        } else {
          card.removeAttribute("aria-current");
        }
      });

      position.textContent = String(currentIndex + 1);
      previousButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === cards.length - 1;
    };

    const getCardScrollLeft = (card) => {
      const scrollPadding = Number.parseFloat(
        window.getComputedStyle(viewport).scrollPaddingLeft,
      );

      return Math.max(0, card.offsetLeft - (scrollPadding || 0));
    };

    const moveToCard = (nextIndex, behavior = "smooth") => {
      const safeIndex = Math.min(Math.max(nextIndex, 0), cards.length - 1);
      const nextCard = cards[safeIndex];

      updateActiveCard(safeIndex);
      viewport.scrollTo({
        left: getCardScrollLeft(nextCard),
        behavior: prefersReducedMotion() ? "auto" : behavior,
      });
    };

    const detectActiveCard = () => {
      const viewportCenter =
        viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
      const closestCard = cards
        .map((card, index) => {
          const cardRect = card.getBoundingClientRect();

          return {
            index,
            distance: Math.abs(
              cardRect.left + cardRect.width / 2 - viewportCenter,
            ),
          };
        })
        .sort((first, second) => first.distance - second.distance)[0];

      if (closestCard) {
        updateActiveCard(closestCard.index);
      }
    };

    const syncFlavorSelection = (state) => {
      cards.forEach((card) => {
        const flavorId = card.dataset.flavor;
        const isRecommended = flavorId === state.diagnosisResult;
        const isSelected = flavorId === state.selectedExtraFlavor;
        const badge = card.querySelector("[data-recommendation-badge]");
        const selectButton = card.querySelector("[data-select-extra-flavor]");

        if (badge) {
          badge.hidden = !isRecommended;
        }

        if (selectButton) {
          selectButton.disabled = isSelected;
          selectButton.textContent = isSelected
            ? "追加の1袋に選択中"
            : "追加の1袋に選ぶ";
        }

        card.classList.toggle("flavor-card--selected", isSelected);
      });

      if (
        state.diagnosisResult &&
        state.diagnosisResult !== lastDiagnosisResult
      ) {
        lastDiagnosisResult = state.diagnosisResult;
        moveToCard(flavorIds.indexOf(state.diagnosisResult), "auto");
      } else if (!state.diagnosisResult) {
        if (lastDiagnosisResult) {
          moveToCard(0, "auto");
        }
        lastDiagnosisResult = null;
      }
    };

    cards.forEach((card) => {
      const selectButton = card.querySelector("[data-select-extra-flavor]");

      selectButton?.addEventListener("click", () => {
        updateSelectedExtraFlavor(card.dataset.flavor);
      });
    });

    previousButton.addEventListener("click", () => {
      moveToCard(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      moveToCard(currentIndex + 1);
    });

    viewport.addEventListener(
      "scroll",
      () => {
        window.cancelAnimationFrame(scrollFrameId);
        scrollFrameId = window.requestAnimationFrame(detectActiveCard);
      },
      { passive: true },
    );

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveToCard(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveToCard(currentIndex + 1);
      }
    });

    guideLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const recommendedIndex = flavorIds.indexOf(
          flavorState.diagnosisResult,
        );

        if (recommendedIndex >= 0) {
          moveToCard(recommendedIndex);
        }
      });
    });

    window.addEventListener(
      "resize",
      () => {
        window.cancelAnimationFrame(resizeFrameId);
        resizeFrameId = window.requestAnimationFrame(() => {
          moveToCard(currentIndex, "auto");
        });
      },
      { passive: true },
    );

    flavorStateListeners.add(syncFlavorSelection);
    syncFlavorSelection(flavorState);
    updateActiveCard(currentIndex);

    window.requestAnimationFrame(() => {
      moveToCard(currentIndex, "auto");
    });
  };

  const initTrialBox = () => {
    const section = document.querySelector("[data-trial-box]");
    const setImage = section?.querySelector("[data-trial-set-image]");
    const breakdownValues = [
      ...(section?.querySelectorAll("[data-trial-breakdown-flavor]") || []),
    ];
    const extraFlavorInputs = [
      ...(section?.querySelectorAll('input[name="trial-extra-flavor"]') || []),
    ];

    if (
      !section ||
      !setImage ||
      breakdownValues.length !== flavorIds.length ||
      extraFlavorInputs.length !== flavorIds.length
    ) {
      return;
    }

    flavorIds.forEach((flavorId) => {
      const image = new Image();
      image.src = flavorData[flavorId].boxImage;
    });

    const syncTrialBox = (state) => {
      const selectedExtraFlavor =
        state.selectedExtraFlavor || state.diagnosisResult || flavorIds[0];
      const selectedFlavor = flavorData[selectedExtraFlavor];

      if (!selectedFlavor) {
        return;
      }

      const setBreakdown = createSetBreakdown(selectedExtraFlavor);

      extraFlavorInputs.forEach((input) => {
        input.checked = input.value === selectedExtraFlavor;
      });

      breakdownValues.forEach((element) => {
        const flavorId = element.dataset.trialBreakdownFlavor;
        element.textContent = `×${setBreakdown[flavorId]}`;
      });

      setImage.alt =
        `${selectedFlavor.name}を1袋追加した、` +
        `SUNNY NUTS ${setBreakdown["sunny-nuts"]}袋、` +
        `BERRY MORNING ${setBreakdown["berry-morning"]}袋、` +
        `CACAO QUIET ${setBreakdown["cacao-quiet"]}袋の7袋セット`;

      if (setImage.getAttribute("src") !== selectedFlavor.boxImage) {
        setImage.classList.remove("is-changing");
        setImage.src = selectedFlavor.boxImage;

        if (!prefersReducedMotion()) {
          window.requestAnimationFrame(() => {
            setImage.classList.add("is-changing");
          });
        }
      }
    };

    extraFlavorInputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked && flavorData[input.value]) {
          updateSelectedExtraFlavor(input.value);
        }
      });
    });

    flavorStateListeners.add(syncTrialBox);
    syncTrialBox(flavorState);
  };

  const initSevenMornings = () => {
    const section = document.querySelector("[data-seven-mornings]");
    const viewport = section?.querySelector("[data-seven-mornings-viewport]");
    const days = [...(section?.querySelectorAll("[data-morning-day]") || [])];
    const previousButton = section?.querySelector(
      "[data-seven-mornings-previous]",
    );
    const nextButton = section?.querySelector("[data-seven-mornings-next]");
    const position = section?.querySelector("[data-seven-mornings-position]");

    if (
      !section ||
      !viewport ||
      days.length !== 5 ||
      !previousButton ||
      !nextButton ||
      !position
    ) {
      return;
    }

    let currentIndex = 0;
    let scrollFrameId = 0;
    let resizeFrameId = 0;

    const updateCurrentDay = (nextIndex) => {
      currentIndex = Math.min(Math.max(nextIndex, 0), days.length - 1);

      days.forEach((day, index) => {
        const isActive = index === currentIndex;
        day.classList.toggle("morning-day-item--active", isActive);

        if (isActive) {
          day.setAttribute("aria-current", "step");
        } else {
          day.removeAttribute("aria-current");
        }
      });

      position.textContent = String(currentIndex + 1);
      previousButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === days.length - 1;
    };

    const getDayScrollLeft = (day) => {
      const scrollPadding = Number.parseFloat(
        window.getComputedStyle(viewport).scrollPaddingLeft,
      );

      return Math.max(0, day.offsetLeft - (scrollPadding || 0));
    };

    const moveToDay = (nextIndex, behavior = "smooth") => {
      const safeIndex = Math.min(Math.max(nextIndex, 0), days.length - 1);

      updateCurrentDay(safeIndex);
      viewport.scrollTo({
        left: getDayScrollLeft(days[safeIndex]),
        behavior: prefersReducedMotion() ? "auto" : behavior,
      });
    };

    const detectCurrentDay = () => {
      const viewportCenter =
        viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
      const closestDay = days
        .map((day, index) => {
          const dayRect = day.getBoundingClientRect();

          return {
            index,
            distance: Math.abs(
              dayRect.left + dayRect.width / 2 - viewportCenter,
            ),
          };
        })
        .sort((first, second) => first.distance - second.distance)[0];

      if (closestDay) {
        updateCurrentDay(closestDay.index);
      }
    };

    previousButton.addEventListener("click", () => {
      moveToDay(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      moveToDay(currentIndex + 1);
    });

    viewport.addEventListener(
      "scroll",
      () => {
        window.cancelAnimationFrame(scrollFrameId);
        scrollFrameId = window.requestAnimationFrame(detectCurrentDay);
      },
      { passive: true },
    );

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveToDay(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveToDay(currentIndex + 1);
      }
    });

    window.addEventListener(
      "resize",
      () => {
        window.cancelAnimationFrame(resizeFrameId);
        resizeFrameId = window.requestAnimationFrame(() => {
          moveToDay(currentIndex, "auto");
        });
      },
      { passive: true },
    );

    updateCurrentDay(0);
  };

  const initBowlStory = () => {
    const section = document.querySelector("#inside-the-bowl");
    const bowlImage = section?.querySelector("[data-bowl-image]");
    const bowlStage = section?.querySelector("[data-bowl-stage]");
    const bowlLive = section?.querySelector("[data-bowl-live]");
    const stepsContainer = section?.querySelector(".bowl-story__steps");
    const steps = [...(section?.querySelectorAll("[data-bowl-step]") || [])];

    if (
      !section ||
      !bowlImage ||
      !bowlStage ||
      !bowlLive ||
      !stepsContainer ||
      steps.length !== 6
    ) {
      return;
    }

    const emptyBowl = {
      src: bowlImage.getAttribute("src"),
      alt: bowlImage.getAttribute("alt"),
    };
    const imageStates = [
      emptyBowl,
      ...steps.map((step) => ({
        src: step.dataset.bowlImage,
        alt: step.dataset.bowlAlt,
      })),
    ];

    if (imageStates.some((state) => !state.src || !state.alt)) {
      return;
    }

    imageStates.slice(1).forEach((state) => {
      const preloadedImage = new Image();
      preloadedImage.src = state.src;
    });

    let currentStep = 0;
    let animationFrameId = 0;

    const showBowlStep = (stepNumber) => {
      const nextState = imageStates[stepNumber];

      if (!nextState || stepNumber === currentStep) {
        return;
      }

      currentStep = stepNumber;
      steps.forEach((step) => {
        const isActive = Number(step.dataset.bowlStep) === stepNumber;
        step.classList.toggle("bowl-step--active", isActive);

        if (isActive) {
          step.setAttribute("aria-current", "step");
        } else {
          step.removeAttribute("aria-current");
        }
      });

      bowlImage.classList.remove("is-changing");
      bowlImage.src = nextState.src;
      bowlImage.alt = nextState.alt;
      bowlLive.textContent = nextState.alt;
      bowlStage.textContent = String(stepNumber).padStart(2, "0");

      window.cancelAnimationFrame(animationFrameId);

      if (!prefersReducedMotion()) {
        animationFrameId = window.requestAnimationFrame(() => {
          bowlImage.classList.add("is-changing");
        });
      }
    };

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const snapLayoutQuery = window.matchMedia("(max-width: 1023px)");
    const intersectingSteps = new Map();
    let observer = null;

    const createObserver = () => {
      observer?.disconnect();
      intersectingSteps.clear();

      const usesSnapContainer = snapLayoutQuery.matches;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const stepNumber = Number(entry.target.dataset.bowlStep);

            if (entry.isIntersecting) {
              intersectingSteps.set(stepNumber, entry);
            } else {
              intersectingSteps.delete(stepNumber);
            }
          });

          if (intersectingSteps.size > 0) {
            const focusPosition = usesSnapContainer
              ? stepsContainer.getBoundingClientRect().top +
                stepsContainer.clientHeight / 2
              : window.innerHeight * 0.47;
            const activeStep = [...intersectingSteps.entries()].sort(
              ([, firstEntry], [, secondEntry]) => {
                if (usesSnapContainer) {
                  const ratioDifference =
                    secondEntry.intersectionRatio -
                    firstEntry.intersectionRatio;

                  if (ratioDifference !== 0) {
                    return ratioDifference;
                  }
                }

                const firstCenter =
                  firstEntry.boundingClientRect.top +
                  firstEntry.boundingClientRect.height / 2;
                const secondCenter =
                  secondEntry.boundingClientRect.top +
                  secondEntry.boundingClientRect.height / 2;

                return (
                  Math.abs(firstCenter - focusPosition) -
                  Math.abs(secondCenter - focusPosition)
                );
              },
            )[0];

            showBowlStep(activeStep[0]);
            return;
          }

          if (!usesSnapContainer) {
            const firstStepEntry = entries.find(
              (entry) => Number(entry.target.dataset.bowlStep) === 1,
            );

            if (
              firstStepEntry &&
              firstStepEntry.boundingClientRect.top > window.innerHeight * 0.5
            ) {
              showBowlStep(0);
            }
          }
        },
        usesSnapContainer
          ? {
              root: stepsContainer,
              threshold: [0.5, 0.75, 0.95],
            }
          : {
              rootMargin: "-42% 0px -48% 0px",
              threshold: 0,
            },
      );

      steps.forEach((step) => observer.observe(step));
    };

    createObserver();

    if ("addEventListener" in snapLayoutQuery) {
      snapLayoutQuery.addEventListener("change", createObserver);
    } else {
      snapLayoutQuery.addListener(createObserver);
    }
  };

  const init = () => {
    persistFlavorState();
    initSpMenu();
    initDiagnosis();
    initFlavorCarousel();
    initTrialBox();
    initFinalCta();
    initPortfolioPurchaseDialog();
    initSevenMornings();
    initBowlStory();
    initFixedCta();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
