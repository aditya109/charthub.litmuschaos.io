import { Typography } from "@material-ui/core";
import React from "react";
import { Link, Maintainer } from "../../redux/model";
import { useStyles } from "./styles";

interface UsefulLinks {
	links: Link[];
	maintainers: Maintainer[];
	platforms?: string[];
	maturity?: string;
}

export function UsefulLinks(props: UsefulLinks) {
	const classes = useStyles();
	const createMaintainers = (maintainers: Maintainer[]) => {
		return (
			<div className={classes.usefulLinks}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Typography variant="body1" className={classes.heading}>
						Maintainers
					</Typography>
				</div>
				{maintainers.map((m: Maintainer) => (
					<div className={classes.maintainerField} key={m.name}>
						<Typography className={classes.maintainerlinkName}>
							{m.name}
						</Typography>
						<Typography className={classes.maintainerlinkEmail}>
							{m.email}
						</Typography>
					</div>
				))}
			</div>
		);
	};

	const createLinks = (header: string, data: Link[]) => {
		return (
			<div className={classes.usefulLinks}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Typography variant="body1" className={classes.heading}>
						{header}
					</Typography>
				</div>
				{data.map(
					(d) =>
						d.url && (
							<div key={d.name}>
								<a
									href={d.url}
									style={{ textDecoration: "none" }}
								>
									<Typography className={classes.linkType}>
										{d.name}
									</Typography>
								</a>
							</div>
						)
				)}
			</div>
		);
	};
	function createPlatformData(header: string, data: string[]) {
		return (
			<div className={classes.usefulLinks}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Typography variant="body1" className={classes.heading}>
						{header}
					</Typography>
				</div>
				<div className={classes.linkListBox}>
					{data.map((d) => (
						<span className={classes.staticType} key={d}>
							{d},
						</span>
					))}
				</div>
			</div>
		);
	}

	function createStaticData(header: string, data: string[]) {
		return (
			<div className={classes.usefulLinks}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Typography variant="body1" className={classes.heading}>
						{header}
					</Typography>
				</div>
				<div className={classes.linkListBox}>
					{data.map((d) => (
						<div className={classes.staticType} key={d}>
							{d}
						</div>
					))}
				</div>
			</div>
		);
	}
	return (
		<div className={classes.mainDiv}>
			{createLinks("Useful Links", props.links)}
			{createMaintainers(props.maintainers)}
			{props.platforms &&
				createPlatformData("Platforms", props.platforms)}
			{props.maturity && createStaticData("Maturity", [props.maturity])}
		</div>
	);
}
