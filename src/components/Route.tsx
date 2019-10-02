import React from "react";
import pathToRegexp from "path-to-regexp";
import Error from "./Error";

export interface RoutesConfig {
    path: string;
    action: (props: any) => JSX.Element;
}

export interface Props {
    route: string;
    routes: RoutesConfig[];
}

export default class Route extends React.Component<Props, any> {
    state: any;
    props: Props;
    private el: any;
    private obs;

    constructor(props: Props) {
        super(props);
        this.props = props;
        this.state = { children: this.resolve(this.props.route) };
        this.addListeners = this.addListeners.bind(this);
        this.goTo = this.goTo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        if (typeof MutationObserver !== "undefined") {
            this.obs = new MutationObserver(this.addListeners);
        }
    }

    componentDidMount() {
        this.addListeners();
        if (this.obs) {
            this.obs.observe(this.el, { childList: true });
        }
    }

    render() {
        return (
            <div
                ref={(el) => {
                    this.el = el;
                }}
                className="router"
            >
                {this.state.children}
            </div>
        );
    }

    /**
     * Determine if we should override the Anchor click event and use SPA behaviour.
     * @param e
     */
    private handleClick(e) {
        if (e.currentTarget.getAttribute("href").startsWith("http")) {
            console.info(
                "Navigate to",
                e.currentTarget.pathname,
                e.currentTarget.href,
                e.currentTarget
            );
            return;
        }
        e.preventDefault();
        this.goTo(e.currentTarget.innerText, e.currentTarget.pathname);
    }

    private addListeners() {
        const links = Array.prototype.slice.call(this.el.querySelectorAll("a"));
        links.forEach((link) => {
            link.addEventListener("click", this.handleClick);
        });

        window.addEventListener("popstate", () => {
            this.back(window.location.pathname);
        });
    }

    private back(path) {
        this.setState({ children: this.resolve(path) });
    }

    private goTo(text, path) {
        history.pushState(null, text, path);
        this.setState({ children: this.resolve(path) });
    }

    /**
     * Resolve the given path. If path not found then return the error Component.
     *
     * @param path
     * @returns {JSX.Element | null}
     */
    private resolve(path): JSX.Element | null {
        let result: JSX.Element = <Error />;
        let specificity = 0;
        for (const route of this.props.routes) {
            const keys = [];
            const regexp = pathToRegexp(route.path, keys);
            const res = regexp.exec(path);
            if (res && res.length > specificity) {
                specificity = res.length;
                result = route.action({
                    regexp,
                    path,
                    ...this.keysToProps(this.mapValueToKeys(keys, res))
                });
            }
        }
        return result;
    }

    /**
     * Return the keys appended with the given values extracted from the regex groups of pathToRegexp.
     *
     * @param {any[]} keys
     * @param {any[]} values
     * @returns {any[]}
     */
    private mapValueToKeys(keys: any[], values: any[]): any[] {
        for (const idx in keys) {
            const valueIdx = parseInt(idx, 10) + 1;
            if (keys.hasOwnProperty(idx) && values[valueIdx]) {
                keys[idx].value = values[valueIdx];
            }
        }
        return keys;
    }

    /**
     * Return an associative array with key name as index and key value as value.
     *
     * @param {any[]} keys
     * @returns {{}}
     */
    private keysToProps(keys: any[]) {
        const props = {};
        for (const key of keys) {
            props[key.name] = key.value;
        }
        return props;
    }
}
