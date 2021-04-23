export class MenuItemConfig {
  public leftIcon?: string;
  public itemText: string;
  public openedItem?: boolean;
  public children?: MenuItemConfig[];
  public itemClass?: string;
  public itemId?: string;
  public itemPath?: string;
  public hidden?: boolean;
  public marginBottom?: number;
  public backgroundColor?: string;
  public paddingLeft ?: string;
  public borderBottom ?: string;
  public borderTop ?: string;
  public itemHeight?: string;
  public itemTextColor ?: string;
  public constructor(leftIcon: string, itemText: string, openedItem: boolean, children: MenuItemConfig[],
                     itemClass: string, itemId: string, itemPath: string, hidden: boolean, marginBottom: number,
                     backgroundColor: string, paddingLeft: string, separatorColor: string, itemHeight: string,
                     itemTextColor: string, borderTop: string) {
    this.leftIcon = leftIcon;
    this.itemText = itemText;
    this.openedItem = openedItem;
    this.children = children;
    this.itemClass = itemClass;
    this.itemId = itemId;
    this.itemPath = itemPath;
    this.hidden = hidden;
    this.marginBottom = marginBottom;
    this.backgroundColor = backgroundColor;
    this.paddingLeft = paddingLeft;
    this.borderBottom = separatorColor;
    this.itemHeight = itemHeight;
    this.itemTextColor = itemTextColor;
    this.borderTop = borderTop;
  }

}
