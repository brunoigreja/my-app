import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const searchBar = StyleSheet.create({

  container: {
    padding: spacing.md
  },
  inputContainer: {
    flexDirection: 'row',
    gap: spacing.md
  },
  input: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600'
  }

})