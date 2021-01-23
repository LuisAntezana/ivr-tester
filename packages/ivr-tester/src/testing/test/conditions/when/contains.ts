import { When } from "./When";
import { hasPart } from "./hasPart";

export interface ContainsConfig {
  ignoreCasing?: boolean;
}

const containsText = (
  partial: string,
  transcript: string,
  ignoreCasing: boolean
) =>
  ignoreCasing
    ? transcript.toLowerCase().includes(partial.toLowerCase())
    : transcript.includes(partial);

/**
 * Evaluates whether a transcript contains
 * * Either a piece of text if a string is provided
 * * Every piece of text if array is provided
 * * When condition passes, having been passed every portion of
 *   the transcript until it returns true, else will return false.
 *
 * ```
 * contains(['test', 'transcript'])('this is a test transcript') //true
 * ```
 *
 * ```
 * contains('test')('this is a test transcript') // true
 * ```
 *
 * ```
 * contains(similarTo('this is a best'))('this is a test transcript') // true
 * ```
 */
export const contains = (
  partialOrWhen: string | string[] | When,
  { ignoreCasing = true }: ContainsConfig = {}
): When => (transcript: string) => {
  if (typeof partialOrWhen === "string") {
    return containsText(partialOrWhen, transcript, ignoreCasing);
  }

  if (Array.isArray(partialOrWhen)) {
    return partialOrWhen.every((text) =>
      containsText(text, transcript, ignoreCasing)
    );
  }

  return hasPart(partialOrWhen)(transcript);
};