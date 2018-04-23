export class DomStyleSheetManager {
  constructor(
    private id: string = null,
    private styleSheet: CSSStyleSheet = null) {
  }

  public set(id: string, styleSheet: CSSStyleSheet): void {
    this.id = id;
    this.styleSheet = styleSheet;
  }

  /**
   * Clones a styleSheet from the dom (to dom) containing a specific flag class.
   * Selects the first that contains this specific flag class.
   * @returns {boolean} Trus if it is cloned, false if the class didn't found.
   */
  public cloneAndSet(flagClassName: string, id: string): boolean {
    const sourceCssElement: Element = this.getStyleElements(flagClassName)[0];
    if (!sourceCssElement) return false;

    const newCssElement: any = sourceCssElement.cloneNode(true);
    document.querySelector('head').appendChild(newCssElement);

    const styleSheets: CSSStyleSheet[] = this.getStyleSheetsContainingClassName(flagClassName);
    if (styleSheets.length < 2) {
      console.error(`DomStyleSheetManager.cloneAndSet: couldn't clone with flagClassName: ${flagClassName}`);
    }
    const newStyleSheet: CSSStyleSheet = styleSheets.reverse()[0];
    this.deleteRuleByClassName(newStyleSheet, flagClassName);
    this.setIdToCSSStyleSheet(newStyleSheet, id);

    this.set(id, newStyleSheet);

    return true;
  }

  // utils

  private genId(id: string): string {
    return `DomStyleSheetManager-${id}-dssm-end`;
  }

  private setIdToCSSStyleSheet(styleSheet:CSSStyleSheet,id: string): void {
    styleSheet.insertRule(`.${this.genId(id)}{ border: 1px solid red; }`);
  }

  private deleteRuleByClassName(styleSheet: CSSStyleSheet, className: string): boolean {
    const index: number = this.getIndexOfRuleContainingClassName(styleSheet, className);
    if (index === -1) return false;

    styleSheet.deleteRule(index);
    return true;
  }

  private getIndexOfRuleContainingClassName(styleSheet: CSSStyleSheet, className: string): number {
    return Array.apply(this, styleSheet.rules)
      .indexOf(
        Array.apply(this, styleSheet.rules)
          .find((rule: CSSStyleRule) => rule.selectorText.indexOf(className) > -1)
      );
  }

  private getStyleElements(className: string): Element[] {
    return Array.apply(this, document.querySelectorAll('style'))
      .filter((styleElement: any) => Array.apply(this, styleElement.sheet.rules)
        .find((rule: CSSStyleRule) => !!rule.selectorText && rule.selectorText.indexOf(className) > -1));
  }

  private getStyleSheetsContainingClassName(className: string): CSSStyleSheet[] {
    return Array.apply(this, document.styleSheets)
      .filter((ss: CSSStyleSheet) => Array.apply(this, ss.rules)
        .find((rule: CSSStyleRule) => !!rule.selectorText && rule.selectorText.indexOf(className) > -1));
  }
}
