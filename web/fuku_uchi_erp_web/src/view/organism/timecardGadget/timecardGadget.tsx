import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useStyles from "./timecardGadget.css";

import Clock from "../../atom/clock/clock";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import { useTheme } from "@material-ui/core";

export type TimecardAction = {
  text: string;
  caption: string;
  filled: boolean;
  disabled: boolean;
  disabledCaption: string;
  iconOutline: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  iconFilled: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

const defaultProps: { actions?: TimecardAction[] } = {};

type Props = typeof defaultProps;

export default function TimecardGadget(props: Props) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <div>
          <Clock className={classes.clock} />
          <CardMedia
            className={classes.media}
            image="/static/timecardImages/1.jpg"
          ></CardMedia>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            いつもお疲れ様です。コロナが再び猛威を奮っているので、体調不良を感じたら無理せず休みましょう。
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <div className={classes.actions}>
            {props.actions &&
              props.actions?.map((action) => {
                const textColor = action.disabled ? "textSecondary" : "primary";
                const iconColor = action.disabled ? "disabled" : "primary";
                return (
                  <div>
                    {action.filled && (
                      <Typography
                        variant="caption"
                        component="p"
                        className={classes.caption}
                        color={textColor}
                      >
                        {action.caption}
                      </Typography>
                    )}
                    {action.disabled && (
                      <Typography
                        variant="caption"
                        component="p"
                        className={classes.caption}
                        color={textColor}
                      >
                        {action.disabledCaption}
                      </Typography>
                    )}

                    <IconButton
                      className={classes.action}
                      disabled={action.disabled}
                    >
                      {action.filled ? (
                        <action.iconFilled
                          color={iconColor}
                          className={clsx(classes.icon, classes.fillIcon)}
                        />
                      ) : (
                        <action.iconOutline
                          color={iconColor}
                          className={classes.icon}
                        />
                      )}
                      <Typography
                        color={textColor}
                        className={clsx(classes.actionText, {
                          [classes.fillActionText]: action.filled,
                        })}
                      >
                        {action.text}
                      </Typography>
                    </IconButton>
                  </div>
                );
              })}
          </div>
        </CardActions>
      </Card>
    </>
  );
}
TimecardGadget.defaultProps = defaultProps;
